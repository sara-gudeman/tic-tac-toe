angular
    .module('game')
    .factory('gamePlayer', gamePlayer);

function gamePlayer () {
  var service = {};

  // later this can be developed such that multiple independent games can be played at once
  // this function currently only allows for two players
  service.changePlayers = function (players, playerId) {
    var updateId = playerId === 0 ? 1 : 0;
    return updateId;
  };

  service.getPlayer = function (players, playerId) {
    return players[playerId];
  };

  return service;
}