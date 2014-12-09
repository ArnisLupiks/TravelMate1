
app.controller('ExampleController', ['$scope', function($scope) {
  $scope.templates =
  [ { name: 'Show Posts', url: 'partials/posts/showPosts.html'},
  { name: 'Add Posts', url: 'partials/posts/addPosts.html'} ];
  $scope.template = $scope.templates[0];
}]);
