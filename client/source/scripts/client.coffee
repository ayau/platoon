$ ->
  addPiece = (id) ->
    $('<div>')
      .addClass('piece')
      .addClass(id)
      .appendTo('body')
  socket = io.connect "#{window.location.href}"
  socket.on 'connected', (data) ->
    addPiece data.id
  socket.on 'update', (data) ->
    for action in data.actions
      piece = $(".#{action.id}")
      unless piece.length
        piece = addPiece action.id
      piece.css
        left: action.x
        top: action.y

  $('body').on 'keydown', (event) ->
    switch event.keyCode
      when 38 # up arrow
        socket.emit 'move',
          x: 0
          y: -5
      when 40 # down arrow
        socket.emit 'move',
          x: 0
          y: 5
      when 37 # left arrow
        socket.emit 'move',
          x: -5
          y: 0
      when 39 # right arrow
        socket.emit 'move',
          x: 5
          y: 0
  $('body').on 'keyup', (event) ->
  $('body').on 'click', (event) ->
    socket.emit 'position',
      x: event.clientX - event.clientX % 5
      y: event.clientY - event.clientY % 5
