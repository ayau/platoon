#CONSTANTS
window.INTERVAL = 100  #rate of redraw

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
            @scene.add new THREE.HemisphereLight(0xFFF, 0x666, 1)

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
        
        @renderer.render @scene, @camera

    class UiModel
        constructor: (model) ->
            # @bullets = []
            @players = {}
            @model = model

        update : ->
            if @model.content isnt "noModel"
                for key, player of @model.content.players
                    if !@players[key]
                        @addPlayer(key, player)
                    else
                        @updatePlayer(key, player)

        addPlayer: (key, player) ->
            uiObject = @createPlayer(player)
            p = new UiPlayer(player, uiObject, "world", "player")
            @players[key] = p 

        updatePlayer: (key, player) ->
            p = @players[key]
            p.position.x = player.x
            p.position.y = player.y
            p.barrelAngle = player.barrelAngle

        getPlayers: ->
            return @players
        getBullets: ->
            return @bullets

        createPlayer: (player) =>
            x = player.x
            y = player.y

            rotation = 30
            barrelAngle = player.barrelAngle

            # return {x:position.x*CTILESIZE, y:position.y*CTILESIZE}
            # x *= CTILESIZE
            # y *= CTILESIZE
            # x
            # y
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


    #The UIModel pieces are defined here
    class UiPiece
        constructor: (piece, uiObject, positionType, type) ->
            @position = new Position(Math.floor(piece.x * window.SCALE), Math.floor(piece.y * window.SCALE), positionType)
            @type = type
            @uiObject = uiObject
        getPosition: -> 
            @position

    class UiPlayer extends UiPiece
        constructor: (piece, uiObject, positionType, type) ->
            @position = new Position(Math.floor(piece.x * window.SCALE), Math.floor(piece.y * window.SCALE), positionType)
            @type = type
            @uiObject = uiObject
            @barrelAngle = piece.barrelAngle


    updatePlayer: (player) ->
        oldX = player.uiObject.position.x      
        oldY = player.uiObject.position.y
        oldBarrelAngle = player.uiObject.gun.rotation.z

        playerRoot = player.uiObject

        x = player.position.x
        y = -1* player.position.y

        rotation = 30

        barrelAngle = player.barrelAngle
        barrelRad = toRadian(barrelAngle)

        if x != oldX || y != oldY
                
            targetPosition = playerRoot.position.clone()

            targetPosition.set(x, y, 0)

            playerRoot.position.lerp(targetPosition, 0.5)

        
        if barrelRad != oldBarrelAngle
            targetRotation = playerRoot.gun.rotation.clone()
            
            # add or subtract 2Pi based for smooth animation/lerp
            if barrelRad > oldBarrelAngle + Math.PI
                playerRoot.gun.rotation.set(0, 0, oldBarrelAngle + 2 * Math.PI)
            else if barrelRad < oldBarrelAngle - Math.PI
                playerRoot.gun.rotation.set(0, 0, oldBarrelAngle - 2 * Math.PI)
            
            targetRotation.set(0, 0, barrelRad)
        
            playerRoot.gun.rotation.lerp(targetRotation, 0.8)


    # degree to radian
    toRadian = (angle) ->
        return angle * Math.PI / 180


class Position 
    constructor: (@x, @y, @positionType) ->
