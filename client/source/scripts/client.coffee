#View folder is included

socket = io.connect 'http://localhost:8080'
socket.on 'event', (data) ->
  console.log data
  socket.emit 'log',
  my: 'data'
