angular.module('game', [])
      .controller('GameController', GameController);

GameController.$inject = ['$scope'];

function GameController ($scope) {
  console.log('hello');
  $scope.hello = 'hello';
  console.log($scope.hello);
}