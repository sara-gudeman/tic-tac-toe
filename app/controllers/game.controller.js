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

  $scope.playerId = 0;

  $scope.currentPlayer = $scope.players[$scope.playerId];
  $scope.currentPiece = $scope.currentPlayer.gamePiece;

  // later this can be developed such that multiple independent games can be played at once
  // this function currently only allows for two players
  function changePlayers (players, playerId) {
    var updateId = playerId === 0 ? 1 : 0;
    return updateId;
  }
  
  // later this can be developed such that multiple independent games can be played at once
  // this function currently only allows for two players
  $scope.changePlayers = changePlayers.bind(null, $scope.players);

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

  // GAME PIECE FUNCTIONALITY
  function togglePiece (row, col) {
    console.log(row, col, $scope.currentPiece);
    $scope.board[row][col] = $scope.currentPiece;
  }

  $scope.togglePiece = togglePiece;

  // GAME LOGIC FUNCTIONALITY
  // TODO: REMOVE $SCOPE REFERENCES SO THAT THIS CAN BE PULLED OUT INTO SERVICE
  function updateGame (row, col, playerId) {
    $scope.togglePiece(row, col);
    $scope.playerId = $scope.changePlayers(playerId);
    $scope.currentPlayer = $scope.players[$scope.playerId];
    $scope.currentPiece = $scope.currentPlayer.gamePiece;
  }

  $scope.updateGame = updateGame;
  
}