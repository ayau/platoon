#CONSTANTS
canvas   = null
HEIGHT   = 500
WIDTH    = 800
INTERVAL = 20 #rate of redraw (if invalidate is called)

#variables
canvas_valid = false
ctx = null

# Holds all players
players = []

# Player Object
Player = (x, y)->
    @x      = x || 50
    @y      = y || 50
    @width  = 3
    @height = 3
    @color  = '#1B56E0'
    draw = (ctx)->
        ctx.fillStyle = @color
        ctx.fillRect @x, @y, @width, @height

create_player = (x, y) ->
    p = new Player (x, y)
    players.push(p)
    invalidate()


init = ->
    canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d')

    setInterval(draw, INTERVAL)


invalidate = ->
    canvas_valid = false

draw = ->
    if !canvas_valid
        clear(ctx)

        p.draw(ctx) for p in players


socket = io.connect 'http://localhost:8080'
socket.on 'event', (data) ->
  console.log data
  socket.emit 'my other event',
    my: 'data'
