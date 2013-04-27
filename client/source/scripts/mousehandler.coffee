
class Platoon.MouseHandler
    constructor: ->

        @lastMousePos = {x: 0, y: 0}
        @mousePos = {}
        @mouseClickPos = null

        document.addEventListener "mousemove", (e) =>
            e.preventDefault()
            x = e.offsetX or e.layerX
            y = e.offsetY or e.layerY
            @mouseMove(x, y)

        document.addEventListener "mouseup", (e) =>
            e.preventDefault()
            x = e.offsetX or e.layerX
            y = e.offsetY or e.layerY
            @mouseClick(x, y)

    mouseMove: (x, y) ->
        @mousePos = {x: x, y: y}

    mouseClick: (x, y) ->
        @mouseClickPos = {x: x, y: y}

    getPendingPosition: ->
        if @lastMousePos.x == @mousePos.x && @lastMousePos.y == @mousePos.y
            return null

        @lastMousePos = @mousePos
        return getWorldCoords(@mousePos)

    getPendingClick: ->
        if !@mouseClickPos
            return null

        clickPosition = @mouseClickPos
        @mouseClickPos = null
        return getWorldCoords(clickPosition)

    getWorldCoords = (coords) ->
        return {x: coords.x / Platoon.const.SCALE, y: coords.y / Platoon.const.MSCALE}