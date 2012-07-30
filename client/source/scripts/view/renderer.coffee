#CONSTANTS
window.INTERVAL = 100  #rate of redraw

SWORLDWIDTH = 1500 #Server coordinate w
SWORLDHEIGHT = 1000 #Server coordinate h
STILESIZE = 50 #Server tile size in server coordinates
SPRITESIZE = 32 #Sprite size

window.SCALE = SPRITESIZE/STILESIZE

class window.Renderer
  constructor: (canvas, images, model) ->
    @width = canvas.x
    @height = canvas.y
    @ctx = canvas.element
    @model = model
    @images = images
  redraw: =>
    @ctx.save
    @ctx.fillStyle = '#ccc'
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
    @ctx.fillRect player.x, player.y, SPRITESIZE, SPRITESIZE
    @ctx.load

  drawBullet: (bullet) ->
    @ctx.save
    @ctx.fillStyle = '#777'
    @ctx.fillRect bullet.x, bullet.y, SPRITESIZE, SPRITESIZE
    @ctx.load

  #TODO: Refactor me (and make me less broken) plz!
  drawTrees: (tree) ->
    drawSpriteOnGrid @ctx, @images.tree, tree[0], tree[1]

  drawWater: (water) ->
    @ctx.save
    @ctx.fillStyle = '#00f'
    @ctx.fillRect water[0] * SPRITESIZE, water[1] * SPRITESIZE, SPRITESIZE, SPRITESIZE
    @ctx.load

  drawBackground: ->
    for col in [0..SWORLDWIDTH/STILESIZE]
      for row in [0..SWORLDHEIGHT/STILESIZE]
        drawSpriteOnGrid @ctx, @images.grass, col, row

  drawSpriteOnGrid = (ctx, sprite, x, y) -> #do I pass in ctx like this? Better way?
    ctx.drawImage sprite, x*SPRITESIZE, y*SPRITESIZE, SPRITESIZE, SPRITESIZE

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