
app.controller('postPanelCtrl', function($scope) {
  $scope.showPosts = function() {templateUrl:'partials/posts/showPosts.html',console.log("show Posts button has been clicked")};
  $scope.addPosts = function() {templateUrl:'partials/posts/addPosts.html'};



  $scope.templates =
    [ { name: 'Show Posts', url: 'partials/posts/showPosts.html'},
      { name: 'Add Posts', url: 'partials/posts/addPosts.html'} ];
  $scope.template = $scope.templates[0];
});
