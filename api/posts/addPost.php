<?php

    include_once '../config.php';

    // Connecting to mysql database
    $mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

    // Check for database connection error
    if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    } // The mysql database connection script

    if(isset($_GET['uid'])&&isset($_GET['heading'])&&isset($_GET['content'])){
        $uid = $_GET['uid'];
        $postHeading = $_GET['heading'];
        $postContent = $_GET['content'];

        $query="INSERT INTO posts(uid,postHeading,postContent) VALUES ('$uid', '$postHeading', '$postContent')";
        $result = $mysqli->query($query) or die($mysqli->error.__LINE__);

        $result = $mysqli->affected_rows;

        echo $json_response = json_encode($result);
    }
?>
