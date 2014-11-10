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
            .when('/', {
                title: 'Login',
                templateUrl: 'partials/login.html',
                controller: 'authCtrl',
                role: '0'
            })
            .when('/message', {
                title: 'Message',
                templateUrl: 'partials/message.html',
                controller: 'authCtrl'
            })
            .when('/about', {
                title: 'About',
                templateUrl: 'partials/about.html',
                controller: 'authCtrl'
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
