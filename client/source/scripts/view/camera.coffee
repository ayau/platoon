class window.Camera
  constructor: (canvasWidth, canvasHeight, CMAPWIDTH, CMAPHEIGHT) ->
    @x            = 0
    @y            = 0
    @width        = canvasWidth * 0.4
    @height       = canvasHeight * 0.4
    @canvasWidth  = canvasWidth
    @canvasHeight = canvasHeight
    @CMAPWIDTH    = CMAPWIDTH
    @CMAPHEIGHT   = CMAPHEIGHT
    
  update: (myPlayerPosition, mousePos)->

    diffX = @x + myPlayerPosition.x
    diffY = @y + myPlayerPosition.y
    if diffX < (@canvasWidth - @width)/2
      @x = ((@canvasWidth - @width)/2 - diffX) * 0.15 + @x
    if diffX > @width + (@canvasWidth - @width)/2
      @x = (@width + (@canvasWidth - @width)/2 - diffX)*0.15 + @x
    if diffY < (@canvasHeight - @height)/2
      @y = ((@canvasHeight - @height)/2 - diffY) * 0.15 + @y
    if diffY > @height + (@canvasHeight - @height)/4 
      @y = (@height + (@canvasHeight - @height)/4 - diffY)*0.15 + @y
  
    if mousePos && mousePos.x #If mouse is enabled
      diffX = @x + (myPlayerPosition.x + mousePos.x)/2 + @width
      diffY = @y + (myPlayerPosition.y + mousePos.y)/2 + @height
      @x = ((@canvasWidth )/2 - diffX) * 0.15 + @x
      @y = ((@canvasHeight)/2 - diffY) * 0.15 + @y

    # Make sure the camera doesn't go offscreen
    if @canvasWidth - @x > @CMAPWIDTH
      @x = @canvasWidth - @CMAPWIDTH
    if @x > 0
      @x = 0
    if @canvasHeight - @y > @CMAPHEIGHT
      @y = @canvasHeight - @CMAPHEIGHT
    if @y > 0
      @y = 0
  getOffset: ->
    return {x: @x, y: @y}
  setDimen: (width, height) ->
    @canvasWidth = width
    @canvasHeight = height
    @width = width * 0.4
    @height = height * 0.4