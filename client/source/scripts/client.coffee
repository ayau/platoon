$ ->
  
  @model = #we store things within content instead of Model directly so when we pass around the model, updates are carried across using pointers.
    content: "noModel"

  @sockets = new Sockets(@model)

  @keyController = new KeyController(@sockets)

  setupView = (images) =>
    canvas =
      element: document.getElementById('canvas').getContext('2d')
      x: 800
      y: 500
    @view = new Renderer(canvas, images, @model)

    setInterval @view.redraw, window.INTERVAL

  loadImages = (sources, callback) ->
    images = {}
    loadedImages = 0
    numImages = 0
     
    # get num of sources
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
 
  loadImages(sources, setupView) #load the images and run setupView on callback