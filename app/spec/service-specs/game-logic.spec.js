describe('gameLogic tests', function (){
  var gameLogic;
  
  // excuted before each "it" is run.
  beforeEach(function (){
    
    // load the module.
    module('game');
    
    // inject service for testing
    inject(function(_gameLogic_) {
      gameLogic = _gameLogic_;
    });
  });
     
  // check to see if it has the expected function
  it('should have an hello function', function () { 
    expect(angular.isFunction(gameLogic.checkWin)).toBe(true);
  });

});