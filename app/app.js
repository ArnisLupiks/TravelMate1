var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'toaster']);

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
            .when('/main', {
                title: 'Main',
                templateUrl: 'partials/main.html',
                controller: 'authCtrl'
            })

            .when('/message', {
                title: 'Message',
                templateUrl: 'partials/message.html'
            })
            .when('/posts', {
                title: 'Posts',
                templateUrl: 'partials/posts.html'
            })
            .when('/about', {
                title: 'About',
                templateUrl: 'partials/about.html'
            })
            .when('/',{
              controller:'reload'
            })
            .when('/contact', {
                title: 'Contact',
                templateUrl: 'partials/contact.html'
            })
            .when('/friends', {
                title: 'Friends',
                templateUrl: 'partials/friends.html'
            })
            .otherwise({
                redirectTo: '/main'
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
