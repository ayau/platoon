{Server} = require('node-static');
http     = require('http')
fs       = require('fs')
io       = require('socket.io')


file = new Server './client/compiled'
server = http.createServer (request, response) ->
  request.addListener 'end', ->
    file.serve request, response

frame = 0

actions = []

clients = {}

io.listen(server.listen 8080).sockets.on 'connection', (socket) ->
  x = 0
  y = 0
  clients[socket.id] = socket
  socket.emit 'connected',
    id: socket.id
  socket.on 'position', (data) ->
    x = data.x
    y = data.y
    data.id = socket.id
    actions.push data
    # do update
  socket.on 'move', (data) ->
    x += data.x
    y += data.y
    data.id = socket.id
    data.x = x
    data.y = y
    actions.push data
    # do update
  socket.on 'disconnect', ->
    delete clients[socket.id]


update = ->
  data =
    frame: frame
  data.actions = actions
  for id, client of clients
    client.emit 'update', data
  actions = []
  frame++

setInterval update, 20