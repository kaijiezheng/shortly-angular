angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Form, Auth) {
  $scope.url = "";
  $scope.rValidUrl = "/^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i";

  $scope.postUrl = function () {
    Form($scope.url).then(function(response) {
      console.log("Posted successfully!");
      $scope.url = ""; // test this
      $location.path("/links");
    })
    .catch(function (err) {
      debugger;
    });
  }

  $scope.logOut = function() {
    debugger;
    Auth.signout();
  }

});
