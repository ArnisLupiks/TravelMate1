//This controller get all Posts from user and displays in array
app.controller('postCtrl', function($scope, $http) {
 getPosts(); // Load all available tasks
    function getPosts(){
      $http.get("api/posts/getPosts.php").success(function(data){
    $scope.posts = data;
    });
 }
 });
