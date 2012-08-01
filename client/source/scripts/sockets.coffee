class window.Sockets
  constructor: (model) ->
    @model = model

    @socket = io.connect "#{window.location.href}"
    @socket.on 'connected', (data) =>
      #@model.content = data.contents
    @socket.on 'update', (data) =>
      @model.content = data.contents

  emit: (key, action) =>
    @socket.emit 'key',
      key: key
      action: action

  getSocketId: =>
    @socket.socket.sessionid