<?php

class DbHandler {

  private $conn;

  function __construct() {
    require_once 'dbConnect.php';
    // opening db connection
    $db = new dbConnect();
    $this->conn = $db->connect();
  }
  /**
  * Fetching single record
  */
  public function getOnePost($query) {
    $r = $this->conn->query($query.' LIMIT 1') or die($this->conn->error.__LINE__);
    return $result = $r->fetch_assoc();
  }

  public function getPosts(){
    if (!isset($_SESSION)) {
      session_start();
    }
    $sess = array();
    if(isset($_SESSION['postID']))
    {
      $sess["postID"] = $_SESSION['postID'];
      $sess["postHeading"] = $_SESSION['postHeading'];
      $sess["postContent"] = $_SESSION['postContent'];
    }
    else
    {
      $sess["postID"] = '';
      $sess["postHeading"] = '';
      $sess["postContent"] = '';
    }
    return $posts;
  }

}

?>
