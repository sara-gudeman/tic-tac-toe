angular
    .module('game')
    .factory('boardService', boardService);

boardService.$inject = ['gamePiece'];

function boardService (gamePiece) {
  var service = {};

  service.makeBoard = function (n) {
    var board = [];

    for (var i = 0; i < n; i++) {
      var row = [];
      for (var j = 0; j < n; j++) {
        var piece = gamePiece.makePiece();
        row.push({piece});
      }
      board.push(row);
    }
    return board;
  }

  service.getBoardState = function (board) {
    var boardValues = [];
    for (var i = 0; i < board.length; i++) {
      var rowValues = [];
      for (var j = 0; j < board.length; j++) {
        rowValues.push(board[i][j].value);
      }
      boardValues.push(rowValues);
    }
    return boardValues;
  }

  service.disableBoard = function (board) {
    board.forEach(function (row) {
      row.forEach(function (piece) {
        piece.disabled = true;
      });
    });
  }

  return service;
}