angular.module("app").factory("ProfileResource", function($q, $resource) {
  return $resource('/api/v1/profiles');
});
