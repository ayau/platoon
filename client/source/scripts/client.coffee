socket = io.connect 'http://localhost:8080'
socket.on 'event', (data) ->
  console.log data
  socket.emit 'my other event',
    my: 'data'