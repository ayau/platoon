#CONSTANTS
window.INTERVAL = 500  #rate of redraw

SMAPWIDTH = 1500 #Server coordinate w
SMAPHEIGHT = 1000 #Server coordinate h
STILESIZE = 50 #Server tile size in server coordinates
CTILESIZE = 32 #Client tile size in pixels
window.SCALE = CTILESIZE/STILESIZE

CMAPWIDTH = SMAPWIDTH * window.SCALE
CMAPHEIGHT = SMAPHEIGHT * window.SCALE

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

  drawPlayer: (player) ->
    canvasCoords = getLocation(player)
    @drawRect(canvasCoords, '#050')

  drawBullet: (bullet) ->
    canvasCoords = getLocation(bullet)
    @drawRect(canvasCoords, '#777')

  #TODO: Refactor me (and make me less broken) plz!
  drawTrees: (tree) ->
    canvasCoords = toWorldCoords(getLocation(tree))
    @drawSprite canvasCoords, @images.tree

  drawWater: (water) ->
    canvasCoords = toWorldCoords(getLocation(water))
    @drawRect(canvasCoords, '#00f')

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
          return {} = 
            x: player.x
            y: player.y
      return {} = #If you're not on the map for any reason, center in the middle
        x: SMAPWIDTH * window.SCALE / 2
        y: SMAPHEIGHT * window.SCALE / 2
    else
      return {} = #If there is no model defined...
          x: SMAPWIDTH * window.SCALE / 2
          y: SMAPHEIGHT * window.SCALE / 2


# grid_drawRect = (gridLoc, color, ctx) ->
#   point = toWorldCoords gridLoc
#   drawRect(point, color, ctx)

# grid_drawSprite = (gridLoc, sprite, ctx) ->
#   point = toWorldCoords gridLoc
#   drawSprite(point,sprite,ctx)

# drawGrid drawRect, point, "#777"
# drawGrid drawSprite, point, @images.tree

# drawGrid = (drawFunc, gridLoc, args...) ->
#   canvasCoords = toWorldCoords gridLoc
#   drawFunc canvasCoords args...

#TODO: You may want to give the player object a 'getCoordinates' method
getLocation = (piece) ->
  x: piece.x
  y: piece.y

toWorldCoords = (tileLocation) ->
  {x:tileLocation.x*CTILESIZE, y:tileLocation.y*CTILESIZE}

toViewPortCoords = (viewPortLocation) ->
  #