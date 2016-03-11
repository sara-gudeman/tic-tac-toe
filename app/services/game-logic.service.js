angular
    .module('game')
    .factory('gameLogic', gameLogic);

function gameLogic () {
  var service = {};

  // function checkWin (board) {
    // two ways to end game:
    // 1. tie -- full board?
    // 2. one player makes three in a row
  // }

  service.checkWin = function (board, row, col, piece) {
    var n = board.length;

    var rowWin = isWin(rowCount(board, row, piece), n);
    var colWin = isWin(colCount(board, col, piece), n);
    var diagLWin = isWin(diagLCount(board, piece), n);
    var diagRWin = isWin(diagRCount(board, piece), n);

    return rowWin || colWin || diagRWin || diagLWin;
  }

  //////////////////////
  // HELPER FUNCTIONS //
  //////////////////////
  function rowCount (grid, row, piece) {
    var count = 0;
    for (var i = 0; i < grid[row].length; i++) {
      if (grid[row][i] === piece) {
        count++;
      }
    }
    return count;
  }

  function colCount (grid, column, piece) {
    var count = 0;
    for (var i = 0; i < grid.length; i++) {
      if (grid[i][column] === piece) {
        count++;
      }
    }
    return count;
  }

  function diagLCount (grid, piece) {
    var count = 0;
    var row = 0;
    var col = grid.length - 1;

    while (row < grid.length) {
      if (grid[row][col] === piece) {
        count++;
      }
      row++;
      col--;
    }

    return count;
  }

  function diagRCount (grid, piece) {
    var count = 0;
    var row = 0;
    var col = 0;

    while (row < grid.length) {
      if (grid[row][col] === piece) {
        count++;
      }
      row++;
      col++;
    }

    return count;
  }

  function isWin (count, total) {
    return count === total;
  }

  return service;
}