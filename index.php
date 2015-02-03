<!DOCTYPE html>
<html lang="en" ng-app="myApp">

  <head>
    <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Travel Mate</title>
            <!-- Bootstrap -->
            <!--<link href="css/bootstrap.min.css" rel="stylesheet"> -->
		        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
            <link href="css/custom.css" rel="stylesheet">
            <link href="css/toaster.css" rel="stylesheet">

            <!-- Popup Theme and css -->
            <link href ="css/ngDialog.css" rel ="stylesheet">
            <link href ="css/ngDialog-theme-default.css" rel ="stylesheet">
            <link href ="css/ngDialog-theme-plain.css" rel ="stylesheet">


            <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>

          <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">




                <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
                <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
                <!--[if lt IE 9]><link href= "css/bootstrap-theme.css"rel= "stylesheet" >

<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->
              </head>

  <body ng-cloak=""  class="background fade-in">


      <div class="container" style="">

        <div data-ng-view="" id="ng-view" class="slide-animation"></div>

      </div>
    </body>

     <script src="//maps.googleapis.com/maps/api/js?libraries=weather,geometry,visualization,places&sensor=false&language=en&v=3.17"></script>
  <toaster-container toaster-options="{'time-out': 3000}"></toaster-container>
  <!-- Libs -->
  <script src="js/angular.min.js" type="text/javascript"></script>
  <script src="js/moment.js" type="text/javascript"></script>

  <script src="js/angular-moment-master/angular-moment.min.js" type="text/javascript"></script>

  <script src="js/angular-route.min.js"type="text/javascript"></script>
  <script src="js/angular-animate.min.js" type="text/javascript"></script>
  <script src="js/angular-file-upload.min.js" type="text/javascript"></script>

  <script src="js/toaster.js" type="text/javascript"></script>
  <script src="js/custom.js" type="text/javascript"></script>
  <script src="js/controllers.js" type="text/javascript"></script>
  <script src="js/directives.js" type="text/javascript"></script>
  <script src="js/ngDialog.min.js" type="text/javascript"></script>

<script src ="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.12.0/ui-bootstrap.min.js" type ="text/javascript"></script>

  <script src="app/app.js" type="text/javascript"></script>
  <script src="app/data.js" type="text/javascript"></script>
  <script src="app/directives.js" type="text/javascript"></script>
  <script src="app/authCtrl.js" type="text/javascript"></script>
  <script src="app/postCtrl.js" type="text/javascript"></script>
  <script src="app/postPanelCtrl.js" type="text/javascript"></script>
<script src="components\bower_components\ngInfiniteScroll\build\ng-infinite-scroll.min.js" type="text/javascript"></script>

<script src="components\bower_components\lodash\dist\lodash.compat.min.js" type="text/javascript"></script>
<script src="components\bower_components\angular-google-maps\dist\angular-google-maps.min.js" type="text/javascript"></script>


</html>
