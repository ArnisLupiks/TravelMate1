//This controller get all Posts from user and displays in array
app.controller('postCtrl', ['$scope', '$http','$filter','$location','FileUploader','ngDialog',
                    function($scope, $http, $filter, $location, FileUploader ,ngDialog) {

   getPosts(); // Load all available tasks
      function getPosts(){
        $http.get("api/posts/getPosts.php").success(function(data){
      $scope.posts = data;
      });
      }

      $scope.uploader = new FileUploader();
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


    // date pick option
    $scope.today = function() {
      $scope.dt = new Date();
      console.log("today button pressed");
    };
  //  $scope.today();

    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['yyyy/MM/dd','dd-MMMM-yyyy', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];






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
        content: $('textarea[name=content]').val(),
        location: $scope.location,
        date: $scope.dt
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

   //reset form
    $scope.master = {};
    $scope.maste = "";
   $scope.reset = function() {
        $scope.form = angular.copy($scope.master);
        $scope.dt = angular.copy($scope.master);
        console.log("reset has been pressed");
      };
      //$scope.reset();
//$scope.map ={ center: { latitude: 45, longitude: -73}, zoom: 15};
// popup dialog for post page **********************************************************************************
    $scope.openPopup = function(post) {
      var newScope = $scope.$new();
      newScope.post = post;
      ngDialog.open({ template: 'partials/posts/individualPost.html', className: 'ngdialog-theme-default', controller: 'postCtrl',scope: newScope});
      var lat = post.latitude;
      var long = post.longitude;
      var mid = post.postID;
      $scope.map ={ center : {latitude :lat , longitude: long }, zoom: 15};

      $scope.markers = {key : mid, coords : {latitude :lat , longitude: long }, icon: 'components/bower_components/angular-google-maps/example/assets/images/blue_marker.png',
                optimized:false,labelClass: "label"};
    };

$scope.isSelected = function(section) {
    return $scope.selected === section;
}
app.constant('angularMomentConfig', {
    preprocess: 'unix', // optional
    timezone: 'Europe/London' // optional
});

  //add pictures
  var uploader = $scope.uploader = new FileUploader({
      url: 'http://localhost/travelmate/api/posts/upload.php'
  });

  // FILTERS

  uploader.filters.push({
      name: 'imageFilter',
      fn: function(item /*{File|FileLikeObject}*/, options) {
          var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
          return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
      }
  });

  // CALLBACKS

  uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
      console.info('onWhenAddingFileFailed', item, filter, options);
  };
  uploader.onAfterAddingFile = function(fileItem) {
      console.info('onAfterAddingFile', fileItem);
  };
  uploader.onAfterAddingAll = function(addedFileItems) {
      console.info('onAfterAddingAll', addedFileItems);
  };
  uploader.onBeforeUploadItem = function(item) {
      console.info('onBeforeUploadItem', item);
  };
  uploader.onProgressItem = function(fileItem, progress) {
      console.info('onProgressItem', fileItem, progress);
  };
  uploader.onProgressAll = function(progress) {
      console.info('onProgressAll', progress);
  };
  uploader.onSuccessItem = function(fileItem, response, status, headers) {
      console.info('onSuccessItem', fileItem, response, status, headers);
  };
  uploader.onErrorItem = function(fileItem, response, status, headers) {
      console.info('onErrorItem', fileItem, response, status, headers);
  };
  uploader.onCancelItem = function(fileItem, response, status, headers) {
      console.info('onCancelItem', fileItem, response, status, headers);
  };
  uploader.onCompleteItem = function(fileItem, response, status, headers) {
      console.info('onCompleteItem', fileItem, response, status, headers);
  };
  uploader.onCompleteAll = function() {
      console.info('onCompleteAll');
  };

  console.info('uploader', uploader);






}]);
