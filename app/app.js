var app = angular.module('myApp', ['ngRoute','ngMap' ,'ngAnimate','ngDialog','toaster','OtdDirectives','ui.bootstrap','angularMoment','angularFileUpload','picDir']);

app.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/login', {
            title: 'Login',
            templateUrl: 'partials/login.html',
            controller: 'authCtrl'
        })
            .when('/logout', {
                title: 'Logout',
                templateUrl: 'partials/login.html',
                controller: 'logoutCtrl'
            })
            .when('/signup', {
                title: 'Signup',
                templateUrl: 'partials/signup.html',
                controller: 'authCtrl'
            })
            .when('/posts', {
                title: 'Posts',
                templateUrl: 'partials/posts.html',
                controller: 'authCtrl'
            })
            .when('/posts',{
              title: 'Posts',
              templateUrl:'partials/posts.html',
              controller: 'postCtrl'
            })
            .when('/message', {
                title: 'Message',
                templateUrl: 'partials/message.html',
                controller: 'authCtrl'
              })
            .when('/posts', {
                title: 'Posts',
                templateUrl: 'partials/posts.html',
                controller: 'authCtrl'
            })
            .when('/about', {
                title: 'About',
                templateUrl: 'partials/about.html',
                controller: 'authCtrl'
            })
            .when('/#',{
              templateUrl: 'partials/posts.html'
            })
            .when('/contact', {
                title: 'Contact',
                templateUrl: 'partials/contact.html',
                controller: 'authCtrl'
            })
            .when('/friends', {
                title: 'Friends',
                templateUrl: 'partials/friends.html',
                controller: 'authCtrl'
            })
            .when('/profile',{
                title: 'Profile',
                templateUrl: 'partials/profile.html',
                controller: 'authCtrl'
            })
            .otherwise({
                redirectTo: '/posts'
            });
  }])
    .run(function ($rootScope, $location, Data) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            $rootScope.authenticated = false;
            Data.get('session').then(function (results) {
                if (results.uid) {
                    $rootScope.authenticated = true;
                    $rootScope.uid = results.uid;
                    $rootScope.name = results.name;
                    $rootScope.email = results.email;
                } else {
                    var nextUrl = next.$$route.originalPath;
                    if (nextUrl == '/signup' || nextUrl == '/login') {

                    } else {
                        $location.path("/login");
                    }
                }
            });
        });
    });

// *** Google location services, adds location from user search ******************
    /* Directives */
    angular.module('OtdDirectives', []).
        directive('googlePlaces', function(){
            return {
                restrict:'E',
                replace:true,
                // transclude:true,
                scope: {location:'='},
                template: '<input id="google_places_ac" name="google_places_ac" type="text" class="input-block-level"/>',
                link: function($scope, elm, attrs){
                    var autocomplete = new google.maps.places.Autocomplete($("#google_places_ac")[0], {});
                    google.maps.event.addListener(autocomplete, 'place_changed', function() {
                        var place = autocomplete.getPlace();
                        $scope.location = place.geometry.location.lat() + ',' + place.geometry.location.lng();
                        $scope.$apply();
                    });
                }
            }
        });


  angular.module('picDir',[]).
    directive('ngThumb', ['$window', function($window) {
      var helper = {
          support: !!($window.FileReader && $window.CanvasRenderingContext2D),
          isFile: function(item) {
              return angular.isObject(item) && item instanceof $window.File;
          },
          isImage: function(file) {
              var type =  '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
              return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
          }
      };

      return {
          restrict: 'A',
          template: '<canvas/>',
          link: function(scope, element, attributes) {
              if (!helper.support) return;

              var params = scope.$eval(attributes.ngThumb);

              if (!helper.isFile(params.file)) return;
              if (!helper.isImage(params.file)) return;

              var canvas = element.find('canvas');
              var reader = new FileReader();

              reader.onload = onLoadFile;
              reader.readAsDataURL(params.file);

              function onLoadFile(event) {
                  var img = new Image();
                  img.onload = onLoadImage;
                  img.src = event.target.result;
              }

              function onLoadImage() {
                  var width = params.width || this.width / this.height * params.height;
                  var height = params.height || this.height / this.width * params.width;
                  canvas.attr({ width: width, height: height });
                  canvas[0].getContext('2d').drawImage(this, 0, 0, width, height);
              }
          }
      };
    }]);
