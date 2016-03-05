angular
    .module('game')
    .controller('GameController', GameController);

GameController.$inject = ['$scope'];

function GameController ($scope) {

  // PLAYER FUNCTIONALITY
  $scope.players = [{
      name: 'Player1',
      gamePiece: 'O'
    },
    {
      name: 'Player2',
      gamePiece: 'X'
    }
  ];

  $scope.currentPlayer = $scope.players[0];
  $currentPiece = $scope.currentPlayer.gamePiece;

  // BOARD FUNCTIONALITY
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