require('chai').should()
{Engine} = require('../source/scripts/engine')

engine = new Engine()
engine.init()

describe 'player1', ->
    it 'should be created', ->
        engine.player_create(1, 100, 100).should.equal true

describe 'player2', ->
    it 'should be created', ->
        engine.player_create(2, 200, 200).should.equal true

describe 'player3', ->
    it 'should be created', ->
        engine.player_create(3, 150, 150).should.equal true

describe 'player1', ->
    it 'should not be created', ->
        engine.player_create(1, 100, 100).should.equal false

describe 'player1', ->
    it 'should be moved', ->
        engine.player_move(1, 20, 20).should.equal true

describe 'tree', ->
    it 'is of size 3', ->
        engine.get_rects().should.equal 3

describe 'player', ->
    it 'should have fired', ->
        engine.player_fire(1, 0.3, 1000).should.equal true

describe 'player', ->
    it 'has fired', ->
        engine.get_rects().should.equal 4

describe 'state', ->
    it 'is not null', ->
        engine.get_state().should.equal true

# describe 'response_list', ->
#     it 'should have 4 actions', ->
#         engine.response_pop().length.should.equal 4

# describe 'response_list', ->
#     it 'should have 0 actions', ->
#         engine.response_pop().length.should.equal 0

