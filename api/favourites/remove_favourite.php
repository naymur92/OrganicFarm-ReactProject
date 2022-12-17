<?php
require '../dbconfig.php';
// $data = json_decode(file_get_contents('php://input'));
// $data = $data->params;
// $prodid = mysqli_real_escape_string($db_conn, trim($data->prodid));

// echo json_encode($_GET['prodid']);

if (
  isset($_GET['prodid'])
  && !empty($_GET['prodid'])
) {
  $prodid = $_GET['prodid'];

  $sql = "DELETE FROM favourites WHERE fv_id=$prodid";

  $result = $db_conn->query($sql);

  if ($db_conn->affected_rows === 1) {
    echo json_encode(["success" => true, "msg" => "Successfully Deleted"]);
    return;
  } else {
    echo json_encode(["success" => false, "msg" => "Server Problem. Please Try Again"]);
    return;
  }
} else {
  echo json_encode(["success" => false, "msg" => "Unauthorised Access!"]);
  return;
}

$db_conn->close();
