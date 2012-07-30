#CONSTANTS
window.INTERVAL = 50  #rate of redraw

SMAPWIDTH = 1500 #Server coordinate w
SMAPHEIGHT = 1000 #Server coordinate h
STILESIZE = 50 #Server tile size in server coordinates
CTILESIZE = 32 #Client tile size in pixels
window.SCALE = CTILESIZE/STILESIZE

CMAPWIDTH = SMAPWIDTH * window.SCALE
CMAPHEIGHT = SMAPHEIGHT * window.SCALE

cameraOffsetX = 0 #default offset if player is not initialized
cameraOffsetY = 0

class window.Renderer
  constructor: (canvas, images, model, socketid) ->
    @width = canvas.x
    @height = canvas.y
    @ctx = canvas.element
    @model = model
    @socketid = socketid
    @images = images

  redraw: =>
    @myPlayerPosition = @getMyPlayerPosition() #We need this to move the viewport
    #REALLY UGLY (but it works) Refactor?
    cameraOffsetX = @width/2 - @myPlayerPosition.x * window.SCALE
    cameraOffsetY = @height/2 - @myPlayerPosition.y * window.SCALE
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

  drawPlayer: (player) -> @drawRect   toViewPortCoords(getLocation player), '#050'
  drawBullet: (bullet) -> @drawRect   toViewPortCoords(getLocation bullet), '#777'
  drawTrees: (tree)  ->   @drawSprite toWorldView(getLocation tree), @images.tree
  drawWater: (water) ->   @drawRect   toWorldView(getLocation water), '#00f' 

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
        @drawSprite (toWorldCoords {x: col, y: row}), @images.grass

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
          return getLocation player
    return {} = #If there is no model defined...
        x: SMAPWIDTH * window.SCALE / 2
        y: SMAPHEIGHT * window.SCALE / 2

#TODO: You may want to give the player object a 'getCoordinates' method
getLocation = (piece) -> {x: piece.x, y: piece.y}

#TODO: come up with better names - maybe call them 'from____'
toWorldCoords = (tileLocation) -> #converts from grid/tile coordinates to world coordinates
  {x:tileLocation.x*CTILESIZE, y:tileLocation.y*CTILESIZE}

#converts from world coordinates to view/canvas coordinates
toViewPortCoords = (viewPortLocation) ->
  {x: viewPortLocation.x + cameraOffsetX, y: viewPortLocation.y + cameraOffsetY} 

#converts from grid/tile coordinates to view/canvas coordinates 
toWorldView = (loc) -> toViewPortCoords toWorldCoords loc

