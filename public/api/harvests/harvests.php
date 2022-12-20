<?php
include '../dbconfig.php';

$result = $db_conn->query("SELECT * FROM harvests");

if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $harvests[] = $row;
  }
  echo json_encode(["success" => true, "harvests" => $harvests]);
  return;
} else {
  echo json_encode(["success" => false, "msg" => 'No Harvesting']);
  return;
}
$db_conn->close();
