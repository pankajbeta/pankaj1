
var mod = angular.module('app', ['$routeProvider']);
mod.config('my',function($routeProvider){
$routeProvider.when('/save',{
        templateUrl: 'data.html',
        controller: 'Ctrl'
      }).

      otherwise({
        redirectTo: 'index.html'
      });
  });
mod.controller('ctrl',function($scope){
$scope.msg="hi";
});
