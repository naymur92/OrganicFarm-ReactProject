<?php
include '../dbconfig.php';

$result = $db_conn->query("SELECT * FROM orders");

if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $orders[] = $row;
  }
  echo json_encode(["success" => true, "orders" => $orders]);
  return;
} else {
  echo json_encode(["success" => false, "msg" => 'No Order']);
  return;
}
$db_conn->close();
