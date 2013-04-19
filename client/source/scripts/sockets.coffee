class Platoon.Sockets
  constructor: (model) ->
    @model = model

    @socket = io.connect "#{window.location.href}"
    @socket.on 'connected', (data) =>
      #@model.content = data.contents
    @socket.on 'update', (data) =>
      @model.content = data.contents

  emitKey: (key, action) =>
    @socket.emit 'key',
      key: key
      action: action

  emitMouse: (key, action) =>
    @socket.emit 'mouse',
      key: key
      action: action

  getSocketId: =>
    @socket.socket.sessionid