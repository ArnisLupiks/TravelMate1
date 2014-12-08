<?php
require '../libs/Slim/Slim.php';




$app = new Slim();

$app->get('/posts', 'getPosts');

$app->run();

function getPosts() {
  $sql = "select * FROM posts";
  try {
    $db = getConnection();
    $stmt = $db->query($sql);
    $wines = $stmt->fetchAll(PDO::FETCH_OBJ);
    $db = null;
    echo json_encode($wines);
  } catch(PDOException $e) {
    echo '{"error":{"text":'. $e->getMessage() .'}}';
  }
}

function getConnection() {
  $dbhost="localhost";
  $dbuser="root";
  $dbpass="";
  $dbname="travelmate";
  $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
  $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  return $dbh;
}
?>
