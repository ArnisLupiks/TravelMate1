<?php
    include_once '../config.php';

    // Connecting to mysql database
    $mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

    // Check for database connection error
    if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    $status = '%';
    if(isset($_GET['status'])){
      $status = $_GET['status'];
    }

    $query="select * from posts";
    $result = $mysqli->query($query) or die($mysqli->conn->error.__LINE__);
    $arr = array();

    if($result->num_rows > 0) {
       while($row = $result->fetch_assoc()) {
       $arr[] = $row;
       }
    }

    # JSON-encode the response
    echo $json_response = json_encode($arr);
?>
