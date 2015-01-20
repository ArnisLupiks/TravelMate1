//This controller get all Posts from user and displays in array
app.controller('postCtrl', function($scope, $http, $filter, $location) {

 getPosts(); // Load all available tasks
    function getPosts(){
      $http.get("api/posts/getPosts.php").success(function(data){
    $scope.posts = data;
    });
 }

 //filter utitlity function
 $scope.customArrayFilter = function (item){
   return (item.postHeading.indexOf('it') != -1);
 };

// option to order by date acsending and descenging mode
   var orderBy = $filter('orderBy');
     $scope.order = function(predicate, reverse){
       $scope.posts = orderBy($scope.posts, predicate, reverse);
     };

     $scope.order('-postDate',false);

   //location scope is empty
   $scope.location = '';

     // on submit button do post and collect data
    $scope.submitForm = function() {

            // check if location is set or not
            if($scope.location === ''){
                alert('Directive did not update the location property in parent controller.');
            } else {
                //alert('Yay. Location: ' + $scope.location);
            }

      // adds results to post form *********************
      var formData = {
        uid: $('input[name=uid]').val(),
        heading: $('input[name=heading]').val(),
        content: $('input[name=content]').val(),
        location: $scope.location
      };
      $http({
          url: "api/posts/addPost.php",
          data: formData,
          method: 'POST',
          headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}

      }).success(function(data){
          //if added information, it will log OK and redirect.
          console.log("OK", data);
          //redirect to main post page
          $location.path("/");

      }).error(function(err){"ERR", console.log(err)})
  };

 });
