{exec, spawn} = require 'child_process'
fs = require 'fs'
path = require 'path'

# Options
option '-w', '--watch', 'watch scripts for changes and rerun commands'
option '-t', '--test', 'execute tests on scripts'
option '-s', '--silent', 'silence first creation of a file'
option '-c', '--clean', 'remove all generated files'
option '-v', '--verbose', 'output all child process outputs'

# Tasks
task 'build', 'Build all resources', (options) ->
  prepare options, dir.serverStatic, Patterns.Copy
  prepare options, dir.server, Patterns.Coffee
  prepare options, dir.static, Patterns.Copy, ->
    prepare options, dir.client, Patterns.Coffee

task 'run', 'Run the server', (options) ->
  process = spawn 'node', ['server/compiled/scripts/server.js']
  unless options.silent
    process.stdout.setEncoding('utf8')
    process.stdout.on 'data', (data) ->
      console.log data
  process.stderr.setEncoding('utf8')
  process.stderr.on 'data', (data) ->
    console.log data

# Directories
dir =
  server:
    source: 'server/source/scripts'
    destination: 'server/compiled/scripts'
    test: 'server/test'
  serverStatic:
    source: 'server/source/static'
    destination: 'server/compiled/static'
  client:
    source: 'client/source/scripts'
    destination: 'client/compiled/scripts'
    test: 'client/test'
  static:
    source: 'client/source/static'
    destination: 'client/compiled'

colors =
  dark:
    black     : '\x1B[0;30m'
    red       : '\x1B[0;31m'
    green     : '\x1B[0;32m'
    yellow    : '\x1B[0;33m'
    blue      : '\x1B[0;34m'
    magenta   : '\x1B[0;35m'
    cyan      : '\x1B[0;36m'
    white     : '\x1B[0;37m'
  bold        : '\x1B[0;1m'
  black       : '\x1B[0;1;30m'
  red         : '\x1B[0;1;31m'
  green       : '\x1B[0;1;32m'
  yellow      : '\x1B[0;1;33m'
  blue        : '\x1B[0;1;34m'
  magenta     : '\x1B[0;1;35m'
  cyan        : '\x1B[0;1;36m'
  white       : '\x1B[0;1;37m'
  reset       : '\x1B[0m'

out =
  format: (action, file, message) ->
    "#{(new Date).toLocaleTimeString()} - #{action} #{file}" + if message then "\n#{message.trim()}" else ''
  log: (args...) ->
    console.log @format args...
  err: (args...) ->
    console.error @format args...
  create: (args...) -> @log "#{colors.cyan}create#{colors.reset}", args...
  update: (args...) -> @log "#{colors.yellow}update#{colors.reset}", args...
  delete: (args...) -> @log "#{colors.magenta}delete#{colors.reset}", args...
  passed: (args...) -> @log "#{colors.green}passed#{colors.reset}", args...
  absent: (args...) -> @log "#{colors.dark.yellow}absent#{colors.reset}", args...
  errors: (args...) -> @err "#{colors.red}errors#{colors.reset}", args...

prepare = (options, dir, Pattern, next) ->
  # Collection of watchers, key is path, value is Node.js FSWatch object
  watchers = {}
  build = (source, stats) ->
    # 'Pattern' within this scope
    if stats.isDirectory()
      pattern = new Patterns.Dir(dir, source)
      callbacks =
        created: (error, stdin, stderr) ->
          unless options.silent?
            out.create "#{colors.blue}#{@destination}#{colors.reset}", if options.verbose? then stdin
          traverse source
        updated: (error, stdin, stderr) ->
          out.update "#{colors.blue}#{@destination}#{colors.reset}", if options.verbose? then stdin
        deleted: (error, stdin, stderr) ->
          unless options.silent?
            out.delete "#{colors.blue}#{@destination}#{colors.reset}", if options.verbose? then stdin
    else if stats.isFile()
      pattern = new Pattern(dir, source)
      callbacks =
        created: (error, stdin, stderr) ->
          if error
            out.errors @destination, stderr
          else
            unless options.silent?
              out.create @destination, if options.verbose? then stdin
            if options.test?
              @test (error, stdin, stderr) ->
                if error
                  out.errors @destination, stderr
                else
                  out.passed @destination, if options.verbose? then stdin
        updated: (error, stdin, stderr) ->
          if error
            out.errors @destination, stderr
          else
            out.update @destination
            if options.test?
              @test (error, stdin, stderr) ->
                if error
                  out.errors @destination, stderr
                else
                  out.passed @destination, if options.verbose? then stdin
        deleted: (error, stdin, stderr) ->
          unless options.silent?
            out.delete @destination, if options.verbose? then stdin

    # Invoke constructor for first pass
    pattern.construct callbacks.created

    # Watch file or directory
    if options.watch?
      # Track time so same time operations aren't repeated
      time = 0
      watchers[source] = fs.watch source, { persistent: true }, (event) ->
        silent = false
        fs.stat source, (error, stats) ->
          # If the watcher doesn't exist the file has since been deleted, and this is a lingering event
          return unless watchers[source]?
          # Error indicates that the source file no longer exists and the watcher should be deleted and constructed output should be destructed
          if error
            watchers[source]?.close()
            delete watchers[source]
            pattern.destruct callbacks.deleted
          # Traverse directory for file changes to apply new watchers
          else if stats.isDirectory()
            traverse source if event is 'rename'
          # Construct if modified time is new and update last modified time
          else if time != stats.mtime.getTime()
            pattern.construct callbacks.updated
            time = stats.mtime.getTime()
  # Apply traversal to directory
  traverse = (dir) ->
    fs.readdir dir, (error, files) ->
      # If there is an error here, the watcher will still
      # be properly destructed from the deleted event
      return if error
      files.forEach (file) ->
        # Use full path for filename
        file = path.join dir, file
        if options.watch
          # Return so we don't attach multiple watchers
          if watchers[file]?
            return
          # Empty object used to reserve key for later watcher
          watchers[file] = {}
        fs.stat file, (error, stats) ->
          return if error
          # Ignore hidden files
          build file, stats unless file.charAt(0) is '.'

  # Remove existing destination directory to build into a clean structure
  (new Patterns.Dir dir, dir.source).destruct (error) ->
    unless options.silent?
      out.delete "#{colors.blue}#{@destination}#{colors.reset}"
    unless options.clean?
      build dir.source, fs.statSync dir.source
    next?()
  # Build from initial source directory

run = (command, dir, source, callback) ->
  exec command, callback?.bind @, @destination dir, source

# Pattern class to define instructions for building a type of file
Pattern = class Pattern
  constructor: (dir, source) ->
    @dir = dir
    @source = source
    @testfile = @testfile() if dir.test
    @destination = @destination()
  construct: (callback) ->
  destruct: (callback) ->
  test: (callback) ->
  run: (command, callback) ->
    exec command, callback?.bind @
  testfile: ->
    @source.replace(@dir.source, @dir.test)
  destination: ->
    @source.replace(@dir.source, @dir.destination)

# Patterns have instructions to construct from a source and destruct the resulting file
Patterns =
  Coffee: class Coffee extends Pattern
    construct: (callback) ->
      @run "./node_modules/.bin/coffee -co #{path.dirname @destination} #{@source}", callback
    destructor: (callback) ->
      @run "rm '#{@destination}'", callback
    test: (callback) ->
      fs.exists @testfile, (exists) =>
        if exists
          @run "NODE_ENV=test
            ./node_modules/.bin/mocha #{@testfile}
            --compilers coffee:coffee-script
            --colors
            --require coffee-script
            --reporter spec", callback
        else
          out.absent "#{@testfile}"
    destination: ->
      "#{path.dirname(@source.replace @dir.source, @dir.destination)}/#{path.basename(@source, '.coffee')}.js"
  Stylus: class Stylus extends Pattern
    construct: (callback) ->
      @run "./node_modules/.bin/stylus  -o #{path.dirname @destination} #{@source}", callback
    destruct: (callback) ->
      @run "rm '#{@destination}'", callback
    destination: ->
      "#{path.dirname(@source.replace @dir.source, @dir.destination)}/#{path.basename(@source, '.styl')}.css"
  Copy: class Copy extends Pattern
    construct: (callback) ->
      @run "cp '#{@source}' '#{@destination}'", callback
    destruct: (callback) ->
      @run "rm '#{@destination}'", callback
  Dir: class Dir extends Pattern
    construct: (callback) ->
      @run "mkdir '#{@destination}'", callback
    destruct: (callback) ->
      @run "rm -r '#{@destination}'", callback
