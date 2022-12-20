<?php
include '../dbconfig.php';

$data = json_decode(file_get_contents('php://input'));

// echo json_encode($data);

if (isset($data)) {

  // Calculate new stock

  $order_id = mysqli_real_escape_string($db_conn, trim($data->id));
  $order_status = mysqli_real_escape_string($db_conn, trim($data->status));

  $sql = "UPDATE orders SET status='$order_status' WHERE id=$order_id";
  // echo $sql;

  $result = $db_conn->query($sql);

  if ($db_conn->affected_rows > 0) {
    echo json_encode(['success' => true, 'msg' => 'Success']);
    return;
  } else {
    echo json_encode(['success' => false, 'msg' => 'Failed! Try again']);
    return;
  }
} else {
  echo json_encode(['success' => false, 'msg' => 'Unauthorised Access']);
  return;
}
