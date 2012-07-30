$ ->
  
  @model = #we store things within content instead of Model directly so when we pass around the model, updates are carried across using pointers.
    content: "noModel"

  @sockets = new Sockets(@model)

  @keyController = new KeyController(@sockets)

  setupView = (images) => #When run this initialises the view and the canvas
    canvas =
      element: document.getElementById('canvas').getContext('2d')
      x: document.getElementById('canvas').width
      y: document.getElementById('canvas').height
    @view = new Renderer(canvas, images, @model, @sockets.getSocketId()) #View needs the socket id to know which player is them in the model
    setInterval @view.redraw, window.INTERVAL

  loadImages = (sources, callback) -> #This will load the images required by the canvas and then run setupView when done
    images = {}
    loadedImages = 0
    numImages = 0
    for src of sources
      numImages++
    for src of sources
      images[src] = new Image()
      images[src].onload = ->
        callback images  if ++loadedImages >= numImages
      images[src].src = sources[src]

  sources = #define all of the required graphics here
    grass: "/images/grass.png"
    tree: "/images/tree.png"
 
  loadImages(sources, setupView) 