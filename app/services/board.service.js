angular
    .module('game')
    .factory('boardService', boardService);

function boardService () {
  var service = {};

  // TODO: PIECE FUNCTIONALITY INTO OWN SERVICE/TEMPLATE
  // STORE ISDISABLED LOGIC ON PIECE, NOT BOARD
  function makePiece () {
    return {
      value: null,
      disabled: false
    }
  }

  service.makeBoard = function (n) {
    var board = [];

    for (var i = 0; i < n; i++) {
      var row = [];
      for (var j = 0; j < n; j++) {
        var piece = makePiece();
        row.push({piece});
      }
      board.push(row);
    }
    return board;
  }

  return service;
}