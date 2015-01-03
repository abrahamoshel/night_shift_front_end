(function() {
  var app = angular.module("app2", []);

  angular.module("app2").controller('PanelController', function($scope, $location) {
    this.tab = 2;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });
})();
