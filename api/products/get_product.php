<?php

include '../dbconfig.php';

if (isset($_GET['id']) && $_GET['id'] != null) {
  $id = mysqli_escape_string($db_conn, trim($_GET['id']));

  $result = $db_conn->query("SELECT * FROM products WHERE id=$id");

  if ($result->num_rows === 1) {
    $product = mysqli_fetch_assoc($result);
    echo json_encode(["success" => true, "product" => $product]);
  } else {
    echo json_encode(["success" => false, "msg" => "No data found"]);
  }
} else {
  echo json_encode(["success" => false, "msg" => "Authentication Error"]);
}
$db_conn->close();
