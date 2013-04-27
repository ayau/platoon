{Server} = require('node-static');
http     = require('http')
fs       = require('fs')
io       = require('socket.io')


file = new Server './client/compiled'
server = http.createServer (request, response) ->
  request.addListener 'end', ->
    file.serve request, response

frame = 0
# setInterval (-> frame++), 20

actions = []

clients = {}

# controller = require './controller'
{Engine} = require './engine'
engine = new Engine()

engine.init()

io.listen(server.listen(8080), {'log level': 1}).sockets.on 'connection', (socket) ->
  clients[socket.id] = socket
  engine.player_create(socket.id, 40, 40)
  
  socket.emit 'connected',
    id: socket.id
    contents:
      level: engine.loadLevel()
    # engine: engine.get_state()

  # socket.on 'position', (data) ->
  #   data.id = socket.id
  #   # actions.push data
  #   # do update

  socket.on 'key', (data) ->
    data.id = socket.id

    if data.action == 'position'
      {v, h} = data.key
      engine.player_key_update(socket.id, h, v)


    # data.contents = engine.get_state()
    # actions.push data
    # do update
    # respond data

  socket.on 'mouse', (data) ->
    data.id = socket.id

    if data.action == 'move'
      {x, y} = data.key
      engine.player_mouse_update(socket.id, x, y)

    if data.action == 'fire'
      {x, y} = data.key
      engine.player_fire(socket.id, x, y, 1)



  socket.on 'disconnect', ->
    delete clients[socket.id]
    engine.player_destroy(socket.id)


respond = (data)->
  for id, client of clients
    client.emit 'update', data

gameLoop = (loopCode) -> setInterval loopCode, 30
gameLoop ->
  engine.update()
  data =
    frame: frame
  # data.actions = actions
  data.contents = engine.get_state()
  respond data
  # controller.loop respond
  actions = []
  frame++

