angular
    .module('game')
    .controller('GameController', GameController);

GameController.$inject = ['$scope', 'boardService', 'gameLogic', 'gamePiece'];

function GameController ($scope, boardService, gameLogic, gamePiece) {
  var size = 3;

  $scope.board = boardService.makeBoard(size);
  $scope.outcome = null;

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

  $scope.updateGame = updateGame;

  // GAME LOGIC FUNCTIONALITY
  // TODO: REMOVE $SCOPE REFERENCES SO THAT THIS CAN BE PULLED OUT INTO SERVICE
  function updateGame (row, col, playerId) {
    var selectedPiece = $scope.board[row][col];
    gamePiece.togglePiece(selectedPiece, $scope.currentPiece);

    var board = boardService.getBoardState($scope.board);
    gameLogic.checkWin(board, row, col, $scope.currentPiece);

    // TEMP: JUST LOGGING THE WINNER
    if (gameLogic.checkWin(board, row, col, $scope.currentPiece)) {
      console.log($scope.players[playerId].name, ' wins')
      $scope.outcome = $scope.players[playerId].name;
      boardService.disableBoard($scope.board);
    }
    // TEMP: JUST LOGGING THE TIE
    if (gameLogic.checkWin(board, row, col, $scope.currentPiece) && gameLogic.checkTie(board)) {
      console.log('tie')
    }

    $scope.playerId = $scope.changePlayers(playerId);
    $scope.currentPlayer = $scope.players[$scope.playerId];
    $scope.currentPiece = $scope.currentPlayer.gamePiece;
  }

  function restartGame () {
    $scope.board = boardService.makeBoard(size);
    $scope.outcome = null;
  }

  function endGame () {
    // disable all pieces,
    // show game outcome
  }

  // GAME VISUAL FUNCTIONALITY
  function getPieceSrc (piece) {}

}