<?php
include '../dbconfig.php';

if (isset($_GET['userid'])) {
  $userid = trim($_GET['userid']);
  if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "SELECT * FROM orders WHERE id=$id AND user_id=$userid ORDER BY order_time DESC";
  } else {
    $sql = "SELECT * FROM orders WHERE user_id=$userid ORDER BY order_time DESC";
  }
} else {
  $sql = "SELECT * FROM orders ORDER BY order_time DESC";
}
$result = $db_conn->query($sql);

if ($result->num_rows > 0) {
  $index = 0;
  while ($row = $result->fetch_assoc()) {
    foreach ($row as $key => $value) {
      if ($key == 'products' || $key == 'address' || $key == 'payment') {
        $orders[$index][$key] = json_decode($value);
      } else {
        $orders[$index][$key] = $value;
      }
    }
    $index++;
  }
  // echo json_encode($orders);
  echo json_encode(["success" => true, "orders" => $orders]);
  // return;
} else {
  echo json_encode(["success" => false, "msg" => 'No Order']);
  return;
}
$db_conn->close();
