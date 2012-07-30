class window.Sockets
  constructor: (model) ->
    @model = model

    @socket = io.connect "#{window.location.href}"
    @socket.on 'connected', (data) =>
      #@model.content = data.contents
    @socket.on 'update', (data) =>
      @model.content = data.contents
      console.log("Received model:")
      console.log(@model.content)

  fire: (key) =>
    @socket.emit 'move',
      key: key

  getSocketId: =>
    @socket.socket.sessionid