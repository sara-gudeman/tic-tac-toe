angular
    .module('game')
    .factory('boardService', boardService);

function boardService () {
  var service = {};

  service.makeBoard = function (n) {
    var board = [];

    for (var i = 0; i < n; i++) {
      var row = new Array(n);
      board.push(row);
    }

    return board;
  }

  return service;
}