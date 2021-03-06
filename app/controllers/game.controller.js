angular
    .module('game')
    .controller('GameController', GameController);

GameController.$inject = ['$scope', 'boardService', 'gameLogic', 'gamePiece', 'gamePlayer'];

function GameController ($scope, boardService, gameLogic, gamePiece, gamePlayer) {
  var size = 3;

  $scope.board = boardService.makeBoard(size);
  $scope.outcome = null;

  $scope.players = [{
    name: 'Player 1',
    gamePiece: 'O'
  },
  {
    name: 'Player 2',
    gamePiece: 'X'
  }];

  var changePlayers = gamePlayer.changePlayers.bind(null, $scope.players);
  var getPlayer = gamePlayer.getPlayer.bind(null, $scope.players);

  $scope.playerId = 0;
  $scope.currentPlayer = getPlayer($scope.playerId);
  $scope.updateGame = updateGame;
  $scope.restartGame = restartGame;
  $scope.isHidden = true;

  function updateGame (row, col, playerId) {
    var currentPlayer = getPlayer(playerId);
    var currentPiece = currentPlayer.gamePiece;

    var selectedPiece = $scope.board[row][col];
    gamePiece.togglePiece(selectedPiece, currentPlayer.gamePiece);

    var updatedBoard = boardService.getBoardState($scope.board);

    if (gameLogic.checkWin(updatedBoard, row, col, currentPlayer.gamePiece)) {
      $scope.outcome = 'Winner: ' + currentPlayer.name;
      $scope.isHidden = false;
      boardService.disableBoard($scope.board);
    }

    if (gameLogic.checkTie(updatedBoard)) {
      $scope.outcome = 'Tie';
      $scope.isHidden = false;
      boardService.disableBoard($scope.board);
    }

    $scope.playerId = changePlayers(playerId);
    $scope.currentPlayer = getPlayer(playerId);
  }

  function restartGame () {
    $scope.board = boardService.makeBoard(size);
    $scope.isHidden = true;
    $scope.outcome = null;
  }

}