$ -> 
  #CONSTANTS
  canvas   = null
  ctx = null
  HEIGHT   = 500 #Canvas sizes
  WIDTH  = 800
  INTERVAL = 33 #rate of redraw
  PLAYERWIDTH = 50
  PLAYERHEIGHT = 50
  VIEWSCALE = 10

  init = ->
    canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d')
    setInterval(redraw, INTERVAL)

    redraw = ->
      ctx.clearRect(0, 0, WIDTH, HEIGHT)
      uiPieces = toUiPieces(model.clone) #clone the model and convert them to uiPieces
      #Painters algorithm for layer/render ordering
      drawBackground()
      drawPiece(p) for p in uiPieces.players
      drawPiece(p) for p in uiPieces.bullets

  drawPiece = (piece) ->
    drawer = getDrawer(piece)
    drawer.draw(piece)

  getDrawer = (piece) ->
    switch piece.class
      when "player" then return playerDrawer
      when "bullet" then return bulletDrawer
    #add every kind of drawer here (lack of Strategy pattern makes me sad.)

  playerDrawer = ->
    draw = (player) -> 
      ctx.save
      ctx.fillStyle = '#005500'
      ctx.fillRect player.x, player.y, PLAYERWIDTH, PLAYERHEIGHT
      ctx.load

  drawBackground = ->
    ctx.save
    ctx.fillStyle = '#5c5'
    ctx.fillRect 0, 0, WIDTH, HEIGHT
    ctx.load

  toUiPieces = (model) ->
    bullets = []
    players = []
    bullets.push(new uiBullet(bullet, "bullet")) for bullet in model.bullets
    players.push(new uiPlayer(player, "player")) for player in model.players

  class uiPiece
    constructor: (piece, class) ->
      x = math.floor(piece.x / VIEWSCALE)
      y = math.floor(piece.y / VIEWSCALE)
      class = class

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