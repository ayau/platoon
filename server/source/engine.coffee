require('../static/QuadTree')

#CONSTANTS
HEIGHT        = 5000
WIDTH         = 8000
INTERVAL      = 33      #frame rate

PLAYER_WIDTH  = 100
PLAYER_HEIGHT = 100


# Holds all players
players = new Object()
bullets = []

class Sprite
    constructor: ->
        @x = 100 
        @y = 100

    isOutOfBounds: ->
        null

class Player
    constructor: (id, x, y)->
        @client_id = id
        @x         = x ? 100 #default position
        @y         = y ? 100
        @health    = 1000
        @isAlive   = true
    move : (dx, dy) ->
        @x = @x + dx
        @y = @y + dy
    fire : (x, y, angle, v)->
        b = new Bullet @client_id, x, y, angle, v
        bullets.push(b)

class Bullet
    constructor: (owner, x, y, angle, v)->
        @owner  = owner
        @x      = x
        @y      = y
        @angle  = angle
        @v      = v
        @damage = 300
        @dx     = Math.floor(v * Math.cos(angle))
        @dy     = Math.floor(v * Math.sin(angle))
    move : ->
        @x = @x + @dx
        @y = @y + @dy
    destroy: ->
        id = bullets.indexOf(@)
        if id != -1
            bullets.splice(id, 1)
        console.log 'bullet_destroyed'

    isOutOfBounds: ->
        @destroy()


validate = (sprite) ->
    isOutOfBounds(sprite)
    hasCollided(sprite)


#Checks to see if piece is out of bounds
isOutOfBounds = (sprite) ->
    valid = true
    if sprite.x > WIDTH
        sprite.x = WIDTH
        valid = false
    else if sprite.x < 0
        sprite.x = WIDTH
        valid = false
    if sprite.y > HEIGHT
        sprite.y = HEIGHT
        valid = false
    else if sprite.y < 0
        sprite.y = 0
        valid = false

    if !valid
        sprite.isOutOfBounds()

#Check to see if sprite has collided with something else
hasCollided = (sprite) ->
    return true
    # if sprite instanceof Player
    #     console.log 'You hit a player'
    # if sprite instanceof Bullet
    #     console.log 'You hit a bullet'

create_player = (id, x, y) ->
    p = new Player id, x, y
    players[id] = p

init = ->
    # console.log 'Game engine started'
    create_player(1,100, 100)
    p1 = players[1]
    p1.move(30,30)

    p1.fire(p1.x, p1.y, 0.3, 1000)
    b1 = bullets[0]
    
    setInterval(cron, 1000)

cron = ->
    move_bullet(b) for b in bullets
    log()

move_bullet = (b) ->
    b.move()
    validate(b)

log = ->
    log_player(p) for p in players
    log_bullet(b) for b in bullets

log_player = (p)->
    console.log 'player ' + p.client_id + " x: " + p.x
    console.log 'player ' + p.client_id + " y: " + p.y

log_bullet = (b)->
    console.log 'bullet fired by: ' + b.owner
    console.log 'bullet x: ' + b.x
    console.log 'bullet y: ' + b.y

init()
