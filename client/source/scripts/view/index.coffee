#CONSTANTS
window.INTERVAL = 33  #rate of redraw

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
    @ctx.clearRect(0, 0, @width, @height)
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

  toUiPieces: (model) ->
    if model.content isnt "noModel"
      bullets = []
      players = []
      bullets.push(new UiPiece(bullet, "bullet")) for bullet in model.content.bullets
      players.push(new UiPiece(player, "player")) for key, player of model.content.players
      return {} =
        bullets: bullets
        players: players
    else
      return {} =
        bullets: []
        players: []

  class UiPiece
    constructor: (piece, type) ->
      @x = Math.floor(piece.x * window.SCALE)
      @y = Math.floor(piece.y * window.SCALE)
      @type = type

#Misc library code required
clone = (obj) ->
  if not obj? or typeof obj isnt 'object'
    return obj

  if obj instanceof Date
    return new Date(obj.getTime())

  if obj instanceof RegExp
    flags = ''
    flags += 'g' if obj.global?
    flags += 'i' if obj.ignoreCase?
    flags += 'm' if obj.multiline?
    flags += 'y' if obj.sticky?
    return new RegExp(obj.source, flags)

  newInstance = new obj.constructor()

  for key of obj
    newInstance[key] = clone obj[key]

  return newInstance