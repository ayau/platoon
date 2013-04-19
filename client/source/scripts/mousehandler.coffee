
class Platoon.MouseHandler
    constructor: ->
        @lastMousePos = {x: 0, y: 0}

        @mousePos = {}

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
        console.log "clicked at", getWorldCoords({x: x, y: y})
        # console.log ("Click at "+x+", "+y)

    getPendingPosition: ->
        if @lastMousePos.x == @mousePos.x && @lastMousePos.y == @mousePos.y
            return null

        @lastMousePos = @mousePos

        return getWorldCoords(@mousePos)

    getWorldCoords = (coords) ->
        return {x: coords.x / Platoon.const.SCALE, y: coords.y / Platoon.const.MSCALE}