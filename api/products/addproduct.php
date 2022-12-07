<?php
include '../dbconfig.php';
$data = json_decode(file_get_contents('php://input'));

if (isset($data->product)) {
  $product = $data->product;

  $name = mysqli_real_escape_string($db_conn, trim($product->name));
  $description = mysqli_real_escape_string($db_conn, trim($product->description));
  $price = mysqli_real_escape_string($db_conn, trim($product->price));
  $category = mysqli_real_escape_string($db_conn, trim($product->category));
  $status = mysqli_real_escape_string($db_conn, trim($product->status));
  $thumbnail = mysqli_real_escape_string($db_conn, trim($product->thumbnail));
  $stock = mysqli_real_escape_string($db_conn, trim($product->stock));

  if ($thumbnail != '') {
    $filename = explode("\\", $product->thumbnail);
    $thumbnail = end($filename);
  }

  $sql = "INSERT INTO products VALUES(NULL, '$name', '$description', '$price', '$category', '$status', '$thumbnail', '$stock', DEFAULT)";
  // echo $sql;

  $result = $db_conn->query($sql);

  if ($db_conn->affected_rows > 0) {
    echo json_encode(['success' => true, 'msg' => 'Product Added']);
    return;
  } else {
    echo json_encode(['success' => false, 'msg' => 'Failed! Try again']);
    return;
  }
} else {
  echo json_encode(['success' => false, 'msg' => 'Unauthorised Access']);
  return;
}
$db_conn->close();
