angular.module("app").factory("Server", function($q, $http) {
  return {
    get: function(url) {
      return $http.get(url);
    },
    post: function(url) {
      return $http.post(url);
    },
  };
});
