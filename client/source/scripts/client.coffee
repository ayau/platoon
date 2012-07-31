$ ->
  
  @model = #we store things within content instead of Model directly so when we pass around the model, updates are carried across using pointers.
    content: "noModel"

  @sockets = new Sockets(@model)

  @keyController = new KeyController(@sockets)

  setupView = (images) => #When run this initialises the view and the canvas
    canvas =
      element: document.getElementById('canvas').getContext('2d')
      width: document.getElementById('canvas').width
      height: document.getElementById('canvas').height     
    @view = new Renderer(canvas, images, @model, @sockets.getSocketId()) #View needs the socket id to know which player is them in the model
    makeCanvasScale() #View must be defined before this is called
    setInterval @view.redraw, window.INTERVAL

  makeCanvasScale = () =>
    resizeCanvas = =>
      newWidth = $(window).width()
      newHeight = $(window).height()
      canvas = document.getElementById('canvas')
      canvas.setAttribute("width", newWidth)
      canvas.setAttribute("height", newHeight) 
      @view.setCanvasSize(newWidth, newHeight)
    resizeCanvas()
    $(window).resize resizeCanvas

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