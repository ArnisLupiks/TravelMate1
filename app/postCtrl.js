//This controller get all Posts from user and displays in array
app.controller('postCtrl', function($scope, $http, $filter, $location) {

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
// add post to database *****************************************************

  $scope.submitForm = function() {
      $http({
          url: "api/posts/addPost.php",
          data:{
            uid: $scope.uid,
            heading: $scope.heading,
            content: $scope.content
          },
          method: 'POST',
          headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}

      }).success(function(data){

          console.log("OK", data)

      }).error(function(err){"ERR", console.log(err)})
  };

 });
