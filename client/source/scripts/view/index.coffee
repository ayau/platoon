$ -> 
    #CONSTANTS
    canvas   = null
    HEIGHT   = 500
    WIDTH    = 800
    INTERVAL = 20 #rate of redraw (if invalidate is called)

    #variables
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
        p = new Player x, y
        players.push(p)

    init = ->
        canvas = document.getElementById('canvas')
        ctx = canvas.getContext('2d')
        setInterval(draw, INTERVAL)

    draw = (state) ->
            clear(ctx)
            p.draw(ctx) for p in state.players

    socket = io.connect 'http://localhost:8080'
    socket.on 'event', (data) ->
      console.log data
      socket.emit 'log',
        my: 'data'
