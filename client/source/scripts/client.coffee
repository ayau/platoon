#CONSTANTS
canvas = null
HEIGHT = 500
WIDTH  = 800

# Holds all players
players = []

# Player Object
Player = (x, y)->
    @x      = x
    @y      = y
    @width  = 3
    @height = 3
    @color  = '#1B56E0'

create_player = (x, y) ->
    p = new Player (x, y)
    players.push(p)
    invalidate()

init = ->
    canvas = document.getElementById('canvas')
