{QuadTree} = require('../../source/static/QuadTree')

class exports.Engine
    #CONSTANTS
    HEIGHT        = 220
    WIDTH         = 220

    PLAYER_WIDTH  = 10
    PLAYER_HEIGHT = 10
    PLAYER_HEALTH = 1000
    PLAYER_SPEED  = 1
    PLAYER_RECOIL = 8

    BULLET_WIDTH  = 2
    BULLET_HEIGHT = 2
    BULLET_DAMAGE = 300

    TYPE_PLAYER = 'player'
    TYPE_BULLET = 'bullet'

    RES_PLAYER_CREATED   = 'player_created'
    RES_PLAYER_MOVED     = 'player_moved'
    RES_PLAYER_FIRED     = 'player_fired'
    RES_PLAYER_COLLIDED  = 'player_collided'
    RES_PLAYER_HIT       = 'player_hit'
    RES_ERROR            = 'error'
    RES_PLAYER_DESTROYED = 'player_destroyed'

    responses = null

    players      = null
    bullets      = null
    tree         = null
    bullet_count = 0

    rects = null

    level = null
    TILE_WIDTH = 10
    TILE_HEIGHT = 10

    colors = [
        0x2980b9,
        0x27AE60,
        0xf39c12,
        0xc0392b,
        0xf39c12,
        0x8e44ad,
        0x2c3e50
    ]

    class Rect
        constructor: (x, y, width, height, id, type)->
            @id         = id
            @type       = type
            @x          = x
            @y          = y
            @width      = width
            @height     = height

    class Sprite
        constructor: ->
            @x = 100
            @y = 100
            @w = 100
            @h = 100

        isOutOfBounds: ->
            null


    class Player extends Sprite
        constructor: (id, x, y)->
            @id        = id
            @x         = x ? 100 #default position
            @y         = y ? 100
            @w         = PLAYER_WIDTH
            @h         = PLAYER_HEIGHT
            @dx        = 0
            @dy        = 0
            @rotation  = 0
            @barrelAngle = 0
            @health    = PLAYER_HEALTH
            @isAlive   = true
            @bulletCount = 5
            @rect      = new Rect(@x, @y, @w, @h, @id, TYPE_PLAYER)
            @mouseX    = 0
            @mouseY    = 0
            @recoil_seconds = 0
            @color     = colors[Math.floor(Math.random()*colors.length)] #Math.floor(Math.random()*16777215) - 1

        move : ->
            if @recoil_seconds > 0
                @recoil_seconds -= 1
                return

            # Calculating rotation of the tank
            if @dx != 0 || @dy != 0
                if @dx == 0 && @dy != 0
                    rotation = 0
                else if @dy == 0 && @dx != 0
                    rotation = 90
                else if @dx/@dy == 1
                    rotation = 45
                else if @dy/@dx == -1
                    rotation = 135

                if Math.abs(rotation - @rotation) > Math.abs(rotation + 180 - @rotation)
                    rotation += 180
                else if Math.abs(rotation - @rotation) > Math.abs(rotation - 180 - @rotation)
                    @rotation += 180

                if  rotation > @rotation
                    @rotation += 5
                else if rotation < @rotation
                    @rotation -= 5

                # reduce speed if rotation is not aligned with direction of movement
                if Math.abs(rotation - @rotation) > 45
                    @x += @dx * (Math.abs(rotation - @rotation)/-45 + 2)
                    @y += @dy * (Math.abs(rotation - @rotation)/-45 + 2)
                else        
                    @x += @dx
                    @y += @dy

                @rect.x = @x
                @rect.y = @y

                @updateBarrelAngle()

        undoMove: ->
            @dx *= -1
            @dy *= -1
            @move()
            @dx = 0
            @dy = 0

        # backtrack movement if collided with other players
        isPushing: (player) ->
            x = @dx
            y = @dy
            @dx = (player.dx - @dx)/2
            @dy = (player.dy - @dy)/2
            
            # no rotation required
            if x != 0 or y != 0
                @move()
            else
                @x += @dx
                @y += @dy
                @rect.x = @x
                @rect.y = @y

            @dx = x
            @dy = y
            # console.log 'after', @x


        updateBarrelAngle: ->
            @barrelAngle = Math.atan((@x - @mouseX) / (@y - @mouseY)) * 180 / Math.PI

            if @y > @mouseY
                @barrelAngle += 180

        fire : (angle, v) ->
            if @bulletCount is 0 || @recoil_seconds > 0
                return null

            @recoil()

            @bulletCount -= 1

            # 12.5 is the barrel length
            barrelX = 12 * Math.sin(angle * Math.PI / 180)
            barrelY = 12 * Math.cos(angle * Math.PI / 180)
            
            b = new Bullet bullet_count, @, @x + barrelX, @y + barrelY, angle, v
            return b

        recoil: ->
            @recoil_seconds = PLAYER_RECOIL

        destroy: ->
            delete players[@id]
            
            rid = rects.indexOf(@rect)
            if rid != -1
                rects.splice(rid, 1)

        # toJSON: ->
        #     id:             @id
        #     x:              @x
        #     y:              @y
        #     dx:             @dx
        #     dy:             @dy
        #     rotation:       @rotation
        #     barrelAngle:    @barrelAngle

    class Bullet extends Sprite
        constructor: (bullet_id, owner, x, y, angle, v)->
            @id = bullet_id
            @owner     = owner
            @x         = x
            @y         = y
            @w         = BULLET_WIDTH
            @h         = BULLET_HEIGHT
            @angle     = angle
            # @v       = v
            @damage    = BULLET_DAMAGE
            @dx        = v * Math.sin(angle * Math.PI / 180)
            @dy        = v * Math.cos(angle * Math.PI / 180)
            @bounce    = 1
            @rect      = new Rect(@x, @y, @w, @h, @id, TYPE_BULLET)
            
        move : ->
            @x = @x + @dx
            @y = @y + @dy

            @rect.x = @x
            @rect.y = @y

        reflect_horizontal: (hasCollided) ->
            @dx *= -1
            @reflect(hasCollided)
            
        reflect_vertical: (hasCollided) ->
            @dy *= -1
            @reflect(hasCollided)
            
        reflect : (hasCollided) ->            
            if @bounce < 1 && !hasCollided
                return @remove()

            @bounce -= 1

            @move()

            if @angle > 180
                @angle -= 180
            da = @angle - 90
            @angle = 90 - da

        # remove and mark as destroyed
        remove: ->
            delete bullets[@id]
            @owner.bulletCount += 1
            @rect.destroyed = true

        # remove bullet and destroy rect
        destroy: ->
            @remove()
            rid = rects.indexOf(@rect)
            if rid != -1
                rects.splice(rid, 1)

        isOutOfBounds: ->
            @destroy()


    validate = (sprite) ->
        isOutOfBounds(sprite)

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

    init : ->
        console.log 'Game engine started'
        # Holds all players
        players = {}
        bullets = {}
        rects = []
        responses = []

        bounds = new Rect(0, 0, WIDTH, HEIGHT)
        tree   = new QuadTree(bounds, false, 7)

        # console.log tree.retrieve(r)
        # setInterval(cron, 1000)

    update_tree = ->
        tree.clear()
        tree.insert(rects)

    get_rects : ->
        return rects.length

    # Builds and return level. Return cached level if level is already loaded
    loadLevel: ->
        if !level

            h = Math.floor(HEIGHT/TILE_WIDTH)
            w = Math.floor(WIDTH/TILE_HEIGHT)
            tiles = []

            for i in [1...w-1]
                for j in [1...h-1]
                    if i is 1 or j is 1 or i is w-2 or j is h-2
                        tiles.push {i, j}
                        x = i * TILE_WIDTH + TILE_WIDTH/2
                        y = j * TILE_HEIGHT + TILE_HEIGHT/2
                        rect = new Rect(x, y, TILE_WIDTH, TILE_HEIGHT, 0, 'wall') # id is wrong. replace please
                        rects.push(rect)

            level = {
                name: 'vanilla'
                width: WIDTH 
                height: HEIGHT
                tiles:
                    width: TILE_WIDTH
                    height: TILE_HEIGHT
                    contents: tiles
            }

        return level

    # API ----------------------------------------------------------------------------------------
    player_create : (id, x, y) ->
        if players.hasOwnProperty(id)
            return {'response': RES_ERROR, 'payload': {'error': 'player already exists'}}
        p = new Player id, x, y
        players[id] = p

        # adding player to quad tree
        rects.push(p.rect)
        tree.insert(p.rect)
        # update_tree()

        return {'response': RES_PLAYER_CREATED, 'payload': {'id': id, 'x': x, 'y': y}}

    player_key_update: (id, dx, dy) ->
        if players.hasOwnProperty(id)
            p = players[id]
            
            if dx > 1
                dx = 1
            else if dx < -1
                dx = -1

            if dy > 1 
                dy = 1
            else if dy < -1
                dy = -1

            if Math.abs(dx) + Math.abs(dy) == 2
                dx *= 0.707
                dy *= 0.707

            # if v*v < dx*dx + dy*dy
            #     new_dx = v* Math.sin(Math.tan(dy / dx))
            #     new_dy = v* Math.cos(Math.tan(dy / dx))
            #     dx     = new_dx
            #     dy     = new_dy
                # for now, don't move player if player is hacking
                # return {'response': RES_ERROR, 'payload': {'error': 'player is moving faster than expected'}}

            p.dx = dx * PLAYER_SPEED
            p.dy = dy * PLAYER_SPEED

        # Not needed yet
        #     return {'response': RES_PLAYER_MOVED, 'payload': {'id': id, 'x': p.x, 'y': p.y}}
        # return {'response': RES_ERROR, 'payload': {'error': 'player not found'}}

    player_mouse_update: (id, x, y) ->
        if players.hasOwnProperty(id)
            p = players[id]

            p.mouseX = x
            p.mouseY = y

            p.updateBarrelAngle()


    player_move = (id) ->
        if players.hasOwnProperty(id)
            p = players[id]
            p.move()
            
        #     r = p.rect
        #     items =  tree.retrieve(r)
        #     for item in items
        #         if item != r
        #             if item.type == TYPE_BULLET
        #                 return {'response': RES_PLAYER_HIT, 'payload': {'id': id, 'x': p.x, 'y': p.y, 'bullet_id': item.id}}
        #             else
        #                 return {'response': RES_PLAYER_COLLIDED, 'payload': {'id': id, 'x': p.x, 'y': p.y, 'player_id': item.id}}
        #     return {'response': RES_PLAYER_MOVED, 'payload': {'id': id, 'x': p.x, 'y': p.y}}
        # return {'response': RES_ERROR, 'payload': {'error': 'player not found'}}

    player_fire : (id, x, y, v) ->
        if bullets.hasOwnProperty(bullet_count)
            return false
        if players.hasOwnProperty(id)
            p = players[id]

            # duplicated code from player_mouse_update
            angle = Math.atan((p.x - x) / (p.y - y)) * 180 / Math.PI
            angle += 180 if p.y > y

            b = p.fire(angle, v)
            
            # If for some reason cannot fire bullet (ie. out of bullets)
            return if !b
                

            bullets[bullet_count] = b

            # adding bullet to quad tree
            rects.push(b.rect)
            tree.insert(b.rect)
            # update_tree()

            bullet_count = bullet_count + 1
            return {'response': RES_PLAYER_FIRED, 'payload': {'id': id, 'x': p.x, 'y': p.y, 'bullet_id': b.id}}
        return {'response': RES_ERROR, 'payload': {'error': 'player not found'}}

    player_destroy: (id) ->
        if players.hasOwnProperty(id)
            players[id].destroy()
            return {'response': RES_PLAYER_DESTROYED, 'payload': {'id': id}}


    get_state: () ->
        {
            players: players
            bullets: bullets
        }

    #runs every interval
    update : ->

        # can change to p instead. Method on player
        player_move(id) for id of players

        move_bullet(b) for id, b of bullets
        
        update_tree()
        detectCollisions()
        # log()

    detectCollisions = () ->

        destroyedRects = []

        for r in rects

            if r.destroyed
                continue

            # ???
            if r.type is 'wall'
                continue

            items = tree.retrieve(r)

            r.isColliding = false

            for item in items
                
                if r == item
                    continue

                # if r is colliding and item is colliding, continue

                # collision algorithm
                dx = Math.abs(r.x - item.x)
                dy = Math.abs(r.y - item.y)
                width = r.width/2 + item.width/2
                height = r.height/2 + item.height/2

                colliding = dx < width && dy < height

                if colliding
                    if r.type is 'bullet' && !r.destroyed
                        handleBulletCollision(r, item, r.isColliding)

                    # else if item.type is 'bullet' && !item.destroyed
                    #     handleBulletCollision(item, r)

                    else if r.type is 'player' && !r.destroyed
                        handlePlayerCollision(r, item, r.isColliding)

                    # r.isColliding = true
                    # item.isColliding = true               

                    r.isColliding = true

            if r.destroyed
                destroyedRects.push(r)

        # delete rects
        for r in destroyedRects
            rid = rects.indexOf(r)
            if rid != -1
                rects.splice(rid, 1)
        

    # handles collisions of bullets
    handleBulletCollision = (b, item, isColliding) ->
        bullet = bullets[b.id]
        
        if item.type is 'wall'
            if Math.abs(item.x - b.x) > Math.abs(item.y - b.y) # wrong calculation 
                bullet.reflect_horizontal(isColliding)
            else
                bullet.reflect_vertical(isColliding)

        else if item.type is 'bullet'
            bullet.remove()
        else if item.type is 'player'
            bullet.remove()


    handlePlayerCollision = (p, item) ->
        player = players[p.id]

        if item.type is 'wall'
            player.undoMove()

        else if item.type is 'player'
            player2 = players[item.id]
            player.isPushing(player2)
            player2.isPushing(player)

    move_bullet = (b) ->
        b.move()
        validate(b) #doesn't do anything yet

    log = ->
        log_player(p) for p in players
        log_bullet(b) for b in bullets

    log_player = (p)->
        console.log 'player ' + p.id + " x: " + p.x
        console.log 'player ' + p.id + " y: " + p.y

    log_bullet = (b)->
        console.log 'bullet fired by: ' + b.owner
        console.log 'bullet x: ' + b.x
        console.log 'bullet y: ' + b.y



