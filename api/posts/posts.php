<?php
$app->get('/posts', function() {
  $db = new DbHandler();
  $posts = $db->getPosts();
  $response["postID"] = $session['postID'];
  $response["postHeading"] = $session['postHeading'];
  $response["postContent"] = $session['postContent'];
  echoResponse(200, $session);
});

?>
