<?php

include '../dbconfig.php';
// echo $_GET['userid'];

if (isset($_GET['userid']) && $_GET['userid'] != null) {
  $userid = mysqli_escape_string($db_conn, trim($_GET['userid']));

  $result = $db_conn->query("SELECT * FROM favourites, products WHERE favourites.prod_id = products.id AND favourites.user_id=$userid");

  if ($result->num_rows > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
      $favourites[] = $row;
    }
    echo json_encode(["success" => true, "favourites" => $favourites]);
  } else {
    echo json_encode(["success" => false, "msg" => "No data found"]);
  }
} else {
  echo json_encode(["success" => false, "msg" => "Authentication Error"]);
}
$db_conn->close();
