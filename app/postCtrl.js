//This controller get all Posts from user and displays in array
app.controller('postCtrl', function($scope, $http, $filter) {

 getPosts(); // Load all available tasks
    function getPosts(){
      $http.get("api/posts/getPosts.php").success(function(data){
    $scope.posts = data;
    });
 }

// option to order by date acsending and descenging mode
   var orderBy = $filter('orderBy');
     $scope.order = function(predicate, reverse){
       $scope.posts = orderBy($scope.posts, predicate, reverse);
     };
   $scope.order('-postDate',false);
 });
