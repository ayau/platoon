#CONSTANTS
window.INTERVAL = 33 #rate of redraw
window.PLAYERWIDTH = 50
window.PLAYERHEIGHT = 50
window.BULLETWIDTH = 10
window.BULLETHEIGHT = 10
window.VIEWSCALE = 10

class window.Renderer
  constructor: (canvas, model) ->
    @width = canvas.x
    @height = canvas.y
    @ctx = canvas.element
    @model = model
  redraw: =>
    @ctx.clearRect(0, 0, @width, @height)
    uiPieces = @toUiPieces @model
    #Painters algorithm for layer/render ordering
    @drawBackground()
    @drawPlayer(p) for p in uiPieces.players
    @drawBullet(p) for p in uiPieces.bullets

  drawPlayer: (player) ->
      @ctx.save
      @ctx.fillStyle = '#005500'
      @ctx.fillRect player.x, player.y, PLAYERWIDTH, PLAYERHEIGHT
      @ctx.load

  drawBullet: (bullet) ->
      @ctx.save
      @ctx.fillStyle = '#777'
      @ctx.fillRect bullet.x, bullet.y, BULLETWIDTH, BULLETHEIGHT
      @ctx.load

  drawBackground: ->
    @ctx.save
    @ctx.fillStyle = '#5c5'
    @ctx.fillRect 0, 0, @width, @height
    @ctx.load

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
      @x = Math.floor(piece.x / VIEWSCALE)
      @y = Math.floor(piece.y / VIEWSCALE)
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