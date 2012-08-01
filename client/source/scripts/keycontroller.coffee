class window.KeyController
  constructor: (sockets) ->
    @sockets = sockets

    $('body').on 'keydown', (event) =>
      key = keyCodeToKey(event.keyCode)
      sockets.emit(key, "down")

    $('body').on 'keyup', (event) =>   
      key = keyCodeToKey(event.keyCode)
      sockets.emit(key, "up")

  keyCodeToKey = (code) ->
    switch code
      when 38 # up arrow
        key = "up"
      when 40 # down arrow
        key = "down"
      when 37 # left arrow
        key = "left"
      when 39 # right arrow
        key = "right"

      when 87 # w key
        key = "up"
      when 83 # s key
        key = "down"
      when 65 # a key
        key = "left"
      when 68 # d key
        key = "right"