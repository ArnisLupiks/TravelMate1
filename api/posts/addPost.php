<?php

    include_once '../config.php';

    // Connecting to mysql database
    $mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

    // Check for database connection error
    if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    } // The mysql database connection script
    //declare
    $data = json_decode(file_get_contents("php://input"));
    $usrid = mysql_real_escape_string($data->uid);
    $heading = mysql_real_escape_string($data->heading);
    $content = mysql_real_escape_string($data->content);
    $location = mysql_real_escape_string($data->location);
    //execute
  if($usrid > 0){
        echo $usrid;
        $query="INSERT INTO posts(uid,postHeading,postContent,location) VALUES ('$usrid', '$heading', '$content', '$location')";
        $result = $mysqli->query($query) or die($mysqli->error.__LINE__);
        $result = $mysqli->affected_rows;
       echo $json_response = json_encode($result);
    }else{
      echo "there is some errors!! ";
    }
?>
