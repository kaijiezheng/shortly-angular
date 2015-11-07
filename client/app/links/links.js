angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  $scope.data = {
    links: []
  };

  $scope.getLinks = function() {
    Links().then(function(response) {
      $scope.data.links = response.data;
    });
  }

  $scope.logOut = function() {
    debugger;
    Auth.signout();
  }

  $scope.getLinks();
});
