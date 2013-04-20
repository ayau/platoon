#CONSTANTS
window.INTERVAL = 20  #rate of redraw

SMAPWIDTH = 2000 #Server coordinate w
SMAPHEIGHT = 1100 #Server coordinate h
STILESIZE = 25 #Server tile size in server coordinates
CTILESIZE = 32 #Client tile size in pixels
window.SCALE = CTILESIZE/STILESIZE

CMAPWIDTH = SMAPWIDTH * window.SCALE
CMAPHEIGHT = SMAPHEIGHT * window.SCALE

# global constants
Platoon.const = {
    SCALE: 5
    MSCALE: 3.45 # scaling for mouse clicks
}

# GL Textures
Platoon.textures = {
    tank:
        blue: new THREE.MeshLambertMaterial(color: 0x000088)
    barrel:
        blue: new THREE.MeshLambertMaterial(color: 0x000077)
    tip:
        blue: new THREE.MeshLambertMaterial(color: 0x000055)

    bullet: new THREE.MeshLambertMaterial(color: 0xAAAAAA)
}

class Platoon.Renderer
    constructor: (canvas, model, socketid) ->
        # @width = canvas.width
        # @height = canvas.width
        @ctx = canvas.element
        @model = model
        @socketid = socketid
        # @mouseHandler = mouseHandler
        # @camera   = new window.Camera(@width, @height, CMAPWIDTH, CMAPHEIGHT)
        # @drawCommander = new DrawCommander()
        @uiPieces = new UiModel @model
        @setupView(canvas)

    setupView: (root) =>
        WebGLHelper.CreateGLCanvas root, 'Canvas', false, (canvas) =>
                        
            @scene = new THREE.Scene()
            @scene.add new THREE.AmbientLight 0x404040
            @scene.add new THREE.HemisphereLight(0xFFFFFF, 0x666666, 1)

            light = new THREE.DirectionalLight 0xffffff, 0.5
            light.position.set(5, -100, 200)
            @scene.add light
            @renderer = new THREE.WebGLRenderer 'canvas': canvas, 'precision': 'mediump'
            # renderer.autoClearColor = false
            # renderer.autoUpdateScene = false
            # renderer.setFaceCulling THREE.CullFaceNone

            @camera = new THREE.OrthographicCamera( 
                0, 
                window.innerWidth/Platoon.const.SCALE, 
                0, 
                -1 * window.innerHeight/Platoon.const.SCALE, - 500, 1000)

            @camera.rotation.set(0.8, 0, 0)
            
            @scene.add @camera

            @renderer.setSize window.innerWidth, window.innerHeight

            setInterval @redraw, window.INTERVAL

    redraw: =>
        # @myPlayerPosition = @getMyPlayerPosition() #We need this to move the viewport
        # @camera.update(@myPlayerPosition, @mouseHandler.getPosition())
        @uiPieces.update()

        @updatePlayer(p) for key, p of @uiPieces.getPlayers()
        @updateBullet(b) for key, b of @uiPieces.getBullets()
        
        @renderer.render @scene, @camera

    class UiModel
        constructor: (model) ->
            @bullets = {}
            @players = {}
            @model = model

        update : ->
            if @model.content isnt "noModel"
                
                for key, player of @model.content.players
                    if !@players[key]
                        @addPlayer(key, player)
                    else
                        @updatePlayer(key, player)

                for key, bullet of @model.content.bullets
                    if !@bullets[key]
                        @addBullet(key, bullet)
                    else
                        @updateBullet(key, bullet)

        addPlayer: (key, player) ->
            uiObject = @createPlayer(player)
            p = new UiPlayer(player, uiObject, "world", "player")
            @players[key] = p 

        updatePlayer: (key, player) ->
            p = @players[key]
            p.position.x = player.x
            p.position.y = player.y
            p.barrelAngle = player.barrelAngle
            p.rotation = player.rotation

        addBullet: (key, bullet) ->
            uiObject = @createBullet(bullet)
            b = new UiPiece(bullet, uiObject, "world", "bullet")
            @bullets[key] = b

        updateBullet: (key, bullet) ->
            b = @bullets[key]
            b.position.x = bullet.x
            b.position.y = bullet.y

        getPlayers: ->
            return @players
        getBullets: ->
            return @bullets

        createPlayer: (player) =>
            x = player.x
            y = player.y

            rotation = player.rotation
            barrelAngle = player.barrelAngle

            # x *= CTILESIZE
            # y *= CTILESIZE

            y *= -1
            
            playerRoot = new THREE.Object3D()
            Platoon.renderer.scene.add playerRoot

            playerRoot.position.set(x, y, 0)

            # Player Mesh
            playerMesh = new THREE.Mesh(new THREE.CubeGeometry(8, 10, 3), Platoon.textures.tank.blue)
            playerMesh.rotation.set(0, 0, toRadian(rotation))
            playerMesh.position.set(0, 0, 1.5)
            playerRoot.add playerMesh
            playerRoot['player'] = playerMesh

            # Gun Mesh
            gunMesh = new THREE.Mesh( new THREE.CubeGeometry(5, 5, 3), Platoon.textures.tank.blue)
            gunMesh.position.set(0, 0, 4.5)
            gunMesh.rotation.set(0, 0, toRadian(barrelAngle))        
            playerRoot.add gunMesh
            playerRoot['gun'] = gunMesh

            # Barrel Mesh
            barrelMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 10, 10, 10, false), Platoon.textures.barrel.blue)
            barrelMesh.rotation.set(toRadian(-1), 0, 0)
            barrelMesh.position.set(0, -6, 0)
            gunMesh.add barrelMesh


            barreltipMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 2, 10, 10, false), Platoon.textures.tip.blue)
            barreltipMesh.position.set(0, -4, 0)
            barrelMesh.add barreltipMesh

            return playerRoot

        createBullet: (bullet) =>
            x = bullet.x
            y = bullet.y

            rotation = bullet.angle

            y *= -1

            bulletRoot = new THREE.Object3D()
            Platoon.renderer.scene.add bulletRoot

            bulletRoot.position.set(x, y, 0)
            
            # Bullet Mesh
            bulletMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 2.5, 10, 10, false), Platoon.textures.bullet)
            bulletMesh.rotation.set(0, 0, toRadian(rotation))
            bulletMesh.position.set(0, 0, 5)
            bulletRoot.add bulletMesh

            return bulletRoot


    #The UIModel pieces are defined here
    class UiPiece
        constructor: (piece, uiObject, positionType, type) ->
            # @position = new Position(Math.floor(piece.x * window.SCALE), Math.floor(piece.y * window.SCALE), positionType)
            @position = new Position(piece.x, piece.y, positionType)
            @type = type
            @uiObject = uiObject
        getPosition: -> 
            @position

    class UiPlayer extends UiPiece
        constructor: (piece, uiObject, positionType, type) ->
            # @position = new Position(Math.floor(piece.x * window.SCALE), Math.floor(piece.y * window.SCALE), positionType)
            @position = new Position(piece.x, piece.y, positionType)
            @type = type
            @uiObject = uiObject
            @barrelAngle = piece.barrelAngle
            @rotation = piece.rotation


    updatePlayer: (player) ->
        oldX = player.uiObject.position.x      
        oldY = player.uiObject.position.y
        oldBarrelAngle = player.uiObject.gun.rotation.z
        oldRotation = player.uiObject.player.rotation.z

        playerRoot = player.uiObject

        x = player.position.x
        y = -1* player.position.y

        rotation = player.rotation
        rotationRad = toRadian(rotation)

        barrelAngle = player.barrelAngle
        barrelRad = toRadian(barrelAngle)

        if x != oldX || y != oldY
            
            # moving tank
            targetPosition = playerRoot.position.clone()
            targetPosition.set(x, y, 0)
            playerRoot.position.lerp(targetPosition, 0.5)

            # rotation of tank
            # 0.01 threshold for compare
            if Math.abs(rotationRad - oldRotation) > 0.01
                targetRotation = playerRoot.gun.rotation.clone()
                
                # add or subtract 2Pi based for smooth animation/lerp
                if rotationRad > oldRotation + Math.PI/2
                    playerRoot.player.rotation.set(0, 0, oldRotation + Math.PI)
                else if rotationRad < oldRotation - Math.PI
                    playerRoot.player.rotation.set(0, 0, oldRotation - Math.PI)
                
                targetRotation.set(0, 0, rotationRad)            
                playerRoot.player.rotation.lerp(targetRotation, 0.8)

        # rotation of barrel
        # 0.01 threshold for compare
        if Math.abs(barrelRad - oldBarrelAngle) > 0.01
            targetRotation = playerRoot.gun.rotation.clone()
            
            # add or subtract 2Pi based for smooth animation/lerp
            if barrelRad > oldBarrelAngle + Math.PI
                playerRoot.gun.rotation.set(0, 0, oldBarrelAngle + 2 * Math.PI)
            else if barrelRad < oldBarrelAngle - Math.PI
                playerRoot.gun.rotation.set(0, 0, oldBarrelAngle - 2 * Math.PI)
            
            targetRotation.set(0, 0, barrelRad)
            playerRoot.gun.rotation.lerp(targetRotation, 0.8)


    updateBullet: (bullet) ->
        x = bullet.position.x
        y = -1 * bullet.position.y

        bulletRoot = bullet.uiObject

        # moving bullet
        targetPosition = bulletRoot.position.clone()
        targetPosition.set(x, y, 0)
        bulletRoot.position.lerp(targetPosition, 0.5)
        # bulletRoot.position.set(x, y, 0)

    # degree to radian
    toRadian = (angle) ->
        return angle * Math.PI / 180


class Position 
    constructor: (@x, @y, @positionType) ->
