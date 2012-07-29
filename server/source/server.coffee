{Server} = require('node-static');
http   = require('http')
fs     = require('fs')
io     = require('socket.io')

io.listen(8080).sockets.on 'connection', (socket) ->
  socket.emit 'event',
    hello: 'world'
  socket.on 'log', (data) ->
    console.log data

file = new Server './client/compiled'
server = http.createServer (request, response) ->
  request.addListener 'end', ->
    file.serve request, response
server.listen(8000)