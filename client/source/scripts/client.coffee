$ ->

  socket = io.connect "#{window.location.href}"
  socket.on 'connected', (data) ->
    setModel data.model
  socket.on 'update', (data) ->
    setModel data.model

  $('body').on 'keydown', (event) ->
    switch event.keyCode
      when 38 # up arrow
        socket.emit 'move',
          key: "up"
      when 40 # down arrow
        socket.emit 'move',
          key: "down"
      when 37 # left arrow
        socket.emit 'move',
          key: "left"
      when 39 # right arrow
        socket.emit 'move',
          key: "right"
  $('body').on 'keyup', (event) ->

  @model = {}
  canvas =
    element: document.getElementById('canvas').getContext('2d')
    x: 800
    y: 500
  @view = new Renderer(canvas, @model)
  

  setModel = (model) ->
    @model = model