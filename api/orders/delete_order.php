<?php
require '../dbconfig.php';
$data = json_decode(file_get_contents('php://input'));
$data = $data->params;
$id = mysqli_real_escape_string($db_conn, trim($data->id));

if (
  isset($id)
  && !empty($id)
) {

  $sql = "DELETE FROM orders WHERE id=$id";

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
