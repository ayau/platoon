#CONSTANTS
window.INTERVAL = 100  #rate of redraw

SMAPWIDTH = 2000 #Server coordinate w
SMAPHEIGHT = 1100 #Server coordinate h
STILESIZE = 25 #Server tile size in server coordinates
CTILESIZE = 32 #Client tile size in pixels
window.SCALE = CTILESIZE/STILESIZE

CMAPWIDTH = SMAPWIDTH * window.SCALE
CMAPHEIGHT = SMAPHEIGHT * window.SCALE

USECAMERA = false

# temporary way to get mouse position
class window.mouseHandler
	constructor: ->
		@mousePos = {}
	getPosition: ->
		return @mousePos
	mouseMove: (x, y) ->
		@mousePos = {x: x, y: y}
	mouseClick: (x, y) ->
		console.log ("Click at "+x+", "+y)

class window.Renderer
	constructor: (canvas, images, model, socketid, mouseHandler) ->
		@width = canvas.width
		@height = canvas.width
		@ctx = canvas.element
		@model = model
		@socketid = socketid
		@images   = images
		@mouseHandler = mouseHandler
		@camera   = new window.Camera(@width, @height, CMAPWIDTH, CMAPHEIGHT)
		@drawCommander = new DrawCommander(@ctx, @camera, @images)

	#TODO: Use observer pattern
	setCanvasSize: (width, height) =>
		@width = width
		@height = height
		@camera.setDimen(@width, @height)

	redraw: =>
		@myPlayerPosition = @getMyPlayerPosition() #We need this to move the viewport
		@camera.update(@myPlayerPosition, @mouseHandler.getPosition())
		
		@uiPieces = new UiModel @model

		#Painters algorithm for layer/render ordering
		@drawCommander.drawBackground()
		@drawTrees(p) for p in @uiPieces.getTrees()
		@drawPlayer(p) for p in @uiPieces.getPlayers()
		@drawBullet(p) for p in @uiPieces.getBullets()

	drawPlayer: (player) -> @drawCommander.draw("player", player.position)
	drawBullet: (bullet) -> @drawCommander.draw("bullet", bullet.position)
	drawTrees: (tree)  ->   @drawCommander.draw("tree", tree.position)
	drawWater: (water) -> 
		image = @images.water
		pos =  water.getPosition
		x = pos.x
		y = pos.y
		top = 0
		right = 0
		down = 0
		left = 0
		# if @objectArray[x-1][y]
		@drawCommander.draw("water", water.position)

	class UiModel
		constructor: (model) ->
				@pieceArray = empty2dArray()
				@bullets = []
				@players = []
				if model.content isnt "noModel"
					@bullets.push(new UiPiece(bullet, "world", "bullet")) for bullet in model.content.bullets
					@players.push(new UiPiece(player, "world", "player")) for key, player of model.content.players 
		getPlayers: ->
			return @players
		getBullets: ->
			return @bullets
		getTrees: ->
			trees = [{x: 10, y: 15}, {x: 11, y: 16}, {x: 12, y: 15}, {x: 10, y: 20}]
			return [new UiPiece(trees[0], "grid", "tree"), new UiPiece(trees[1], "grid", "tree"), new UiPiece(trees[2], "grid", "tree"), new UiPiece(trees[3], "grid", "tree")]

		empty2dArray = ->
			horisontalCount = (CMAPWIDTH/CTILESIZE)
			verticalCount = (CMAPHEIGHT/CTILESIZE)
			array = new Array horisontalCount 
			for x in [0..horisontalCount-1]
				array[x] = new Array verticalCount
			return array

	#The UIModel pieces are defined here
	class UiPiece
		constructor: (piece, positionType, type) ->
			@position = new Position(Math.floor(piece.x * window.SCALE), Math.floor(piece.y * window.SCALE), positionType)
			@type = type
		getPosition: -> 
			@position

	getMyPlayerPosition: ->
		if @model.content isnt "noModel"
			for key, player of @model.content.players
				if (player.id == @socketid)
					{x, y} = player
					return {x: x * window.SCALE, y: y * window.SCALE}
		return {} = #If there is no model defined...
			x: SMAPWIDTH * window.SCALE / 2
			y: SMAPHEIGHT * window.SCALE / 2

class DrawCommander
	constructor: (@ctx, @camera, @images) ->
	
	draw: (type, position) ->
		switch type
			when "player" then sprite = @images.player
			when "grass" then sprite = @images.grass
			when "tree" then sprite = @images.tree
			else sprite = @images.player
		position = toCanvasCoords(position, @camera)
		@ctx.drawImage(sprite, position.x, position.y, CTILESIZE, CTILESIZE)

	toCanvasCoords = (position, camera) ->
		gridToWorld = (position) -> #converts from grid/tile coordinates to world coordinates
			return {x:position.x*CTILESIZE, y:position.y*CTILESIZE}
		worldToCanvas = (position, camera) ->
			if !USECAMERA then return position #If they disable the camera
			{x, y} = camera.getOffset()
			return {x: position.x + x, y: position.y + y} 
		switch position.positionType
			when "world" then return worldToCanvas(position, camera)
			when "grid" then return worldToCanvas(gridToWorld(position), camera)
			when "canvas" then return position
			else console.log "Position type undefined"
		return position #catch all

	drawBackground: ->
		@ctx.save
		@ctx.fillStyle = '#000'
		@ctx.fillRect 0, 0, @width, @height
		@ctx.load
		for x in [0..SMAPWIDTH/STILESIZE]
			for y in [0..SMAPHEIGHT/STILESIZE]
				@draw("grass", new Position(x, y, "grid"))

class Position 
	constructor: (@x, @y, @positionType) ->
