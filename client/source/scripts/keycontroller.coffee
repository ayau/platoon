class window.KeyController
  constructor: (sockets) ->
    @sockets = sockets

    $('body').on 'keydown', (event) =>
      switch event.keyCode
        when 38 # up arrow
          @sockets.fire("up")
        when 40 # down arrow
          @sockets.fire("down")
        when 37 # left arrow
          @sockets.fire("left")
        when 39 # right arrow
          @sockets.fire("right")

    $('body').on 'keyup', (event) ->