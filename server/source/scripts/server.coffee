{Server} = require('node-static');
http     = require('http')
fs       = require('fs')
io       = require('socket.io')


file = new Server './client/compiled'
server = http.createServer (request, response) ->
  request.addListener 'end', ->
    file.serve request, response

frame = 0
setInterval (-> frame++), 20

actions = []

clients = {}

# controller = require './controller'
{Engine} = require './engine'
engine = new Engine()

engine.init()

engine.create_player(1, 100,100)

io.listen(server.listen 8080).sockets.on 'connection', (socket) ->
  clients[socket.id] = socket
  socket.emit 'connected',
    id: socket.id

  # socket.on 'position', (data) ->
  #   data.id = socket.id
  #   # actions.push data
  #   # do update

  socket.on 'move', (data) ->
    data.id = socket.id
    # engine.player_move()
    console.log engine.get_state()
    data.contents = engine.get_state()
    # actions.push data
    # do update
    respond data

  socket.on 'disconnect', ->
    delete clients[socket.id]

respond = (data)->
  for id, client of clients
    client.emit 'update', data

setInterval (-> frame++), 20
# gameLoop = (loopCode) -> setInterval loopCode, 20
# gameLoop ->
#   data =
#     frame: frame
#   data.actions = actions
#   respond data
#   # controller.loop respond
#   actions = []
#   frame++


