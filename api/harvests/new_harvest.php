<?php
include '../dbconfig.php';

$data = json_decode(file_get_contents('php://input'));

// echo json_encode($data);


if (isset($data->info)) {
  $id = mysqli_real_escape_string($db_conn, trim($data->info->product));
  $amount = mysqli_real_escape_string($db_conn, trim($data->info->amount));
  $status = mysqli_real_escape_string($db_conn, trim($data->info->status));
  $name = mysqli_real_escape_string($db_conn, trim($data->prodname));
  $category = mysqli_real_escape_string($db_conn, trim($data->prodcat));

  $sql = "INSERT INTO harvests VALUES(NULL, '$id', '$name', '$category', '$amount', DEFAULT)";

  $db_conn->autocommit(false);
  $db_conn->begin_transaction();

  $result = $db_conn->query($sql);

  if ($db_conn->affected_rows > 0) {
    mysqli_query($db_conn, "UPDATE products SET stock=stock + $amount, status='$status' WHERE id=$id");
    if (mysqli_affected_rows($db_conn) === 1) {
      $db_conn->commit();
      echo json_encode(['success' => true, 'msg' => 'Harvest Added']);
      return;
    } else {
      $db_conn->rollback();
    }
  } else {
    echo json_encode(['success' => false, 'msg' => 'Failed! Try again']);
    return;
  }
} else {
  echo json_encode(['success' => false, 'msg' => 'Unauthorised Access']);
  return;
}
$db_conn->close();
