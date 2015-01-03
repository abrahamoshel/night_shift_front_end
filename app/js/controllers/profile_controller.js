(function() {
  angular.module("app").controller('ProfileController', function($scope, $location, Server) {
    // $scope.profiles = [
    //                     {title: 'Great Expectations', author: 'Dickens', hasProfile: true },
    //                     {title: 'Foundation Series', author: 'Asimov', hasProfile: false },
    //                     {title: 'Treasure Island', author: 'Stephenson' }
    //                   ];
    var jsonGet = "/api/v1/profiles";

    Server.get(jsonGet).
      success(function(data) {
        $scope.profs = data;
      });

    $scope.selfy = {};

    $scope.addProfile = function(profiles) {
      $scope.profs.push($scope.selfy);
      $scope.selfy = {};
    };
  });
})();
