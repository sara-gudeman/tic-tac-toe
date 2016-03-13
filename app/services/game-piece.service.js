angular
    .module('game')
    .service('gamePiece', gamePiece);

function gamePiece () {
  var service = {};

  // TODO: PIECE FUNCTIONALITY INTO OWN SERVICE/TEMPLATE
  // STORE ISDISABLED LOGIC ON PIECE, NOT BOARD
  service.makePiece = function () {
    return {
      value: null,
      disabled: false
    };
  };

  service.togglePiece = function (piece, playerPiece) {
    if (!piece.disabled) {
      piece.value = playerPiece;
      piece.disabled = true;
    }
  };

  return service;
}