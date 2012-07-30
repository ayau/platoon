#CONSTANTS
window.INTERVAL = 100  #rate of redraw

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
    @myPlayerPosition = @getMyPlayerPosition()
    console.log(@myPlayerPosition)
    @ctx.save
    @ctx.fillStyle = '#000'
    @ctx.fillRect 0, 0, @width, @height
    @ctx.load
    uiPieces = @toUiPieces @model
    #Painters algorithm for layer/render ordering
    @drawBackground()

    #Define extra UI elements to try using a grid for features 
    trees = [[1,1], [2,1]]
    water = [[4,2], [12,1]]
    uiPieces.features = {}
    uiPieces.features.trees = trees
    uiPieces.features.water = water

    @drawTrees(p) for p in uiPieces.features.trees
    @drawWater(p) for p in uiPieces.features.water

    @drawPlayer(p) for p in uiPieces.players
    @drawBullet(p) for p in uiPieces.bullets

  drawPlayer: (player) ->
    @ctx.save
    @ctx.fillStyle = '#005500'
    @ctx.fillRect player.x, player.y, CTILESIZE, CTILESIZE
    @ctx.load

  drawBullet: (bullet) ->
    @ctx.save
    @ctx.fillStyle = '#777'
    @ctx.fillRect bullet.x, bullet.y, CTILESIZE, CTILESIZE
    @ctx.load

  #TODO: Refactor me (and make me less broken) plz!
  drawTrees: (tree) ->
    drawSpriteOnGrid @ctx, @images.tree, tree[0], tree[1]

  drawWater: (water) ->
    @ctx.save
    @ctx.fillStyle = '#00f'
    @ctx.fillRect water[0] * CTILESIZE, water[1] * CTILESIZE, CTILESIZE, CTILESIZE
    @ctx.load

  drawBackground: ->
    for col in [0..SMAPWIDTH/STILESIZE]
      for row in [0..SMAPHEIGHT/STILESIZE]
        drawSpriteOnGrid @ctx, @images.grass, col, row

  drawSpriteOnGrid = (ctx, sprite, x, y) -> #do I pass in ctx like this? Better way?
    ctx.drawImage sprite, x*CTILESIZE, y*CTILESIZE, CTILESIZE, CTILESIZE

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