class Platoon.KeyController
  constructor: () ->

    @lastAction = {
      v: 0
      h: 0
    }
    
    @keysDown = {
      up: false
      down: false
      left: false
      right: false
    }

    document.addEventListener "keydown", (event) =>
      key = keyCodeToKey(event.keyCode)
      
      # prevents multiple events
      if key && !@keysDown[key]
        @keysDown[key] = true

    document.addEventListener "keyup", (event) =>
      key = keyCodeToKey(event.keyCode)
      
      # prevents multiple events
      if key && @keysDown[key]
        @keysDown[key] = false

  keyCodeToKey = (code) ->
    switch code
      when 38 # up arrow
        key = "up"
      when 40 # down arrow
        key = "down"
      when 37 # left arrow
        key = "left"
      when 39 # right arrow
        key = "right"

      when 87 # w key
        key = "up"
      when 83 # s key
        key = "down"
      when 65 # a key
        key = "left"
      when 68 # d key
        key = "right"

  # computes overall action of keypresses
  # prevents movement when up and down are pressed at the same time
  getPendingAction: ->
    vAction = 0
    hAction = 0
    
    if @keysDown.up
      vAction -= 1
    
    if @keysDown.down
      vAction += 1
    
    if @keysDown.left 
      hAction -= 1
    
    if @keysDown.right
      hAction += 1

    if @lastAction.v == vAction && @lastAction.h == hAction
      return null
    
    @lastAction = {v: vAction, h: hAction}

    return {v: vAction, h: hAction}
