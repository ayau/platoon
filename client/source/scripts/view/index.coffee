$ -> 
  #CONSTANTS
  INTERVAL = 33 #rate of redraw
  PLAYERWIDTH = 50
  PLAYERHEIGHT = 50
  BULLETWIDTH = 10
  BULLETHEIGHT = 10
  VIEWSCALE = 10

  class Renderer
    constructor: (ctx, width, height) ->
      @width = width
      @height = height
      @ctx = ctx
    redraw: (model) ->
      @ctx.clearRect(0, 0, WIDTH, HEIGHT)
      uiPieces = @toUiPieces model #clone the model and convert them to uiPieces
      #Painters algorithm for layer/render ordering
      @drawBackground()
      @drawPiece(p) for p in uiPieces.players
      @drawPiece(p) for p in uiPieces.bullets

    drawPiece = (piece) ->
      drawer = @drawers[piece.type]
      drawer.draw(piece)

    drawers = 
      player: playerDrawer
      bullet: bulletDrawer

    playerDrawer = ->
      draw = (player) -> 
        @ctx.save
        @ctx.fillStyle = '#005500'
        @ctx.fillRect player.x, player.y, PLAYERWIDTH, PLAYERHEIGHT
        @ctx.load

    bulletDrawer = ->
      draw = (bullet) -> 
        @ctx.save
        @ctx.fillStyle = '#777'
        @ctx.fillRect bullet.x, bullet.y, BULLETWIDTH, BULLETHEIGHT
        @ctx.load

    drawBackground = ->
      @ctx.save
      @ctx.fillStyle = '#5c5'
      @ctx.fillRect 0, 0, WIDTH, HEIGHT
      @ctx.load

    toUiPieces = (model) ->
      bullets = []
      players = []
      bullets.push(new uiPiece(bullet, "bullet")) for bullet in model.bullets
      players.push(new uiPiece(player, "player")) for player in model.players
      return {
        bullets: bullets
        player: players
      }

    class UiPiece
      constructor: (piece, type) ->
        @x = math.floor(piece.x / VIEWSCALE)
        @y = math.floor(piece.y / VIEWSCALE)
        @type = type

  renderer = new Renderer(document.getElementById('canvas').getContext('2d'), 800, 500)
  setInterval (-> renderer.redraw model.clone), INTERVAL






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