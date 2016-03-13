angular
    .module('game')
    .factory('gamePlayer', gamePlayer);

function gamePlayer () {
  var service = {};

  service.changePlayers = function (players, playerId) {
    var updateId = playerId === 0 ? 1 : 0;
    return updateId;
  };

  service.getPlayer = function (players, playerId) {
    return players[playerId];
  };

  return service;
}