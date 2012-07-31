#CONSTANTS
window.INTERVAL = 50  #rate of redraw

SMAPWIDTH = 1500 #Server coordinate w
SMAPHEIGHT = 1000 #Server coordinate h
STILESIZE = 50 #Server tile size in server coordinates
CTILESIZE = 32 #Client tile size in pixels
window.SCALE = CTILESIZE/STILESIZE

CMAPWIDTH = SMAPWIDTH * window.SCALE
CMAPHEIGHT = SMAPHEIGHT * window.SCALE

class window.Camera
  constructor: (canvasWidth, canvasHeight) ->
    @x            = 0
    @y            = 0
    @width        = canvasWidth * 0.4
    @height       = canvasHeight * 0.4
    @canvasWidth  = canvasWidth
    @canvasHeight = canvasHeight
  update: (myPlayerPosition)->
    diffX = @x + myPlayerPosition.x
    diffY = @y + myPlayerPosition.y
    if diffX < (@canvasWidth - @width)/2
      @x = ((@canvasWidth - @width)/2 - diffX) * 0.1 + @x
    if diffX > @width + (@canvasWidth - @width)/2
      @x = (@width + (@canvasWidth - @width)/2 - diffX)*0.1 + @x
    if diffY < (@canvasHeight - @height)/2
      @y = ((@canvasHeight - @height)/2 - diffY) * 0.1 + @y
    if diffY > @height + (@canvasHeight - @height)/4 
      @y = (@height + (@canvasHeight - @height)/4 - diffY)*0.1 + @y

    # Make sure the camera doesn't go offscreen
    if @x > 0
      @x = 0
    if @canvasWidth - @x > CMAPWIDTH
      @x = @canvasWidth - CMAPWIDTH
    if @y > 0
      @y = 0
    if @canvasHeight - @y > CMAPHEIGHT
      @y = @canvasHeight - CMAPHEIGHT
    console.log @x
  getOffset: ->
    return {x: @x, y: @y}

class window.Renderer
  constructor: (canvas, images, model, socketid) ->
    @width    = canvas.x
    @height   = canvas.y
    @ctx      = canvas.element
    @model    = model
    @socketid = socketid
    @images   = images
    @camera   = new window.Camera(canvas.x, canvas.y)

  redraw: =>
    @myPlayerPosition = @getMyPlayerPosition() #We need this to move the viewport
    #REALLY UGLY (but it works) Refactor?
    #normal center position (boring)
    # cameraOffsetX = @width/2 - @myPlayerPosition.x * window.SCALE
    # cameraOffsetY = @height/2 - @myPlayerPosition.y * window.SCALE

    #smooth panning (fancy)
    @camera.update(@myPlayerPosition)
    
    @uiPieces = @toUiPieces @model
    @setupExtraFeatures()

    #Painters algorithm for layer/render ordering
    @drawBackground()
    @drawTrees(p) for p in @uiPieces.features.trees
    @drawWater(p) for p in @uiPieces.features.water
    @drawPlayer(p) for p in @uiPieces.players
    @drawBullet(p) for p in @uiPieces.bullets

  setupExtraFeatures: ->
    trees = [{x:1, y:1}, {x:2, y:1}]
    water = [{x:4, y:1}, {x:5, y:1}]
    @uiPieces.features = {}
    @uiPieces.features.trees = trees
    @uiPieces.features.water = water

  drawPlayer: (player) -> @drawRect   toViewPortCoords((getLocation player), @camera), '#050'
  drawBullet: (bullet) -> @drawRect   toViewPortCoords((getLocation bullet), @camera), '#777'
  drawTrees: (tree)  ->   @drawSprite toWorldView((getLocation tree), @camera), @images.tree
  drawWater: (water) ->   @drawRect   toWorldView((getLocation water), @camera), '#00f' 

  drawRect: (point, color) ->
    @ctx.save
    @ctx.fillStyle = color
    @ctx.fillRect point.x, point.y, CTILESIZE, CTILESIZE
    @ctx.load

  drawSprite: (point, sprite) ->
    @ctx.drawImage(sprite, point.x, point.y, CTILESIZE, CTILESIZE)

  drawBackground: ->
    @ctx.save
    @ctx.fillStyle = '#000'
    @ctx.fillRect 0, 0, @width, @height
    @ctx.load
    for col in [0..SMAPWIDTH/STILESIZE]
      for row in [0..SMAPHEIGHT/STILESIZE]
        @drawSprite toWorldView(({x: col, y: row}), @camera), @images.grass

  toUiPieces: (model) -> #Build a collection of UIPieces from the Model
    if model.content isnt "noModel"
      bullets = []
      players = []
      bullets.push(new UiPiece(bullet)) for bullet in model.content.bullets
      players.push(new UiPiece(player)) for key, player of model.content.players
      return {} =
        bullets: bullets
        players: players
    else
      return {} =
        bullets: []
        players: []

  class UiPiece # Define the conversion from model pieces to UIpieces here.
    constructor: (piece) ->
      @x = Math.floor(piece.x * window.SCALE)
      @y = Math.floor(piece.y * window.SCALE)

  getMyPlayerPosition: ->
    if @model.content isnt "noModel"
      for key, player of @model.content.players
        if (player.id == @socketid)
          {x, y} = getLocation player
          return {x: x * window.SCALE, y: y * window.SCALE}
    return {} = #If there is no model defined...
        x: SMAPWIDTH * window.SCALE / 2
        y: SMAPHEIGHT * window.SCALE / 2

#TODO: You may want to give the player object a 'getCoordinates' method
getLocation = (piece) -> {x: piece.x, y: piece.y}

#TODO: come up with better names - maybe call them 'from____'
toWorldCoords = (tileLocation) -> #converts from grid/tile coordinates to world coordinates
  {x:tileLocation.x*CTILESIZE, y:tileLocation.y*CTILESIZE}

#converts from world coordinates to view/canvas coordinates
toViewPortCoords = (viewPortLocation, camera) ->
  {x, y} = camera.getOffset()
  return {x: viewPortLocation.x + x, y: viewPortLocation.y + y} 

#converts from grid/tile coordinates to view/canvas coordinates 
toWorldView = (loc, camera) -> toViewPortCoords (toWorldCoords loc), camera
