angular
    .module('game')
    .controller('GameController', GameController);

GameController.$inject = ['$scope'];

function GameController ($scope) {
  $scope.hello = 'hello';

  function makeBoard (n) {
    var board = [];

    for (var i = 0; i < n; i++) {
      var row = new Array(n);
      board.push(row);
    }

    return board;
  }

  var board = makeBoard(3);

  $scope.board = board;
  
}