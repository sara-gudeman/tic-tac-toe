angular
    .module('game')
    .controller('GameController', GameController);

GameController.$inject = ['$scope', 'boardService'];

function GameController ($scope, boardService) {
  var size = 3;

  $scope.board = boardService.makeBoard(size);

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


  // GAME PIECE FUNCTIONALITY
  function togglePiece (row, col) {
    if (!$scope.board[row][col].disabled) {
      $scope.board[row][col].value = $scope.currentPiece;
      $scope.board[row][col].disabled = true;
    }
    console.log(row, col, $scope.currentPiece);
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

  function checkWin (board) {
    // two ways to end game:
    // 1. tie -- full board?
    // 2. one player makes three in a row
  }

  function restartGame () {
    // reset board to initial state
    // basically just make a new board?
  }

  function endGame () {
    // disable all pieces,
    // show game outcome
  }

}