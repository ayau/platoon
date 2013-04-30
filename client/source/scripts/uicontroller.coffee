
class Platoon.UIController

    constructor: () ->
        $('#content').css({
            height: window.innerHeight
            display: 'block'
        })

    resize: (width, height) ->
        w = window.innerWidth - window.innerHeight * 1100/765

        $('#content').css({
            width: w + 'px'
            height: window.innerHeight
        })