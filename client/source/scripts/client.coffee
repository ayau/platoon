$ ->
  
  @model = #we store things within content instead of Model directly so when we pass around the model, updates are carried across using pointers.
    content: "noModel"
  canvas =
    element: document.getElementById('canvas').getContext('2d')
    x: 800
    y: 500
  @view = new Renderer(canvas, @model)

  socket = io.connect "#{window.location.href}"
  socket.on 'connected', (data) ->
    #setModel data.contents
  socket.on 'update', (data) ->
    setModel data.contents

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

  setModel = (model) =>
    @model.content = model
    console.log("Model set by server:")
    console.log(@model)

  setInterval @view.redraw, window.INTERVAL