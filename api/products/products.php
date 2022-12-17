<?php
include '../dbconfig.php';

$result = $db_conn->query("SELECT * FROM products");

if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $products[] = $row;
  }
  echo json_encode(["success" => true, "products" => $products]);
  return;
} else {
  echo json_encode(["success" => false, "msg" => 'No Products']);
  return;
}
$db_conn->close();
