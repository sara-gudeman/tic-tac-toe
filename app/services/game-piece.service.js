angular
    .module('game')
    .service('gamePiece', gamePiece);

function gamePiece () {
  var service = {};

  service.togglePiece = function (piece, playerPiece) {
    if (!piece.disabled) {
      piece.value = playerPiece;
      piece.disabled = true;
    }
  };

  return service;
}