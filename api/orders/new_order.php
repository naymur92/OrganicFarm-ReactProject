<?php
include '../dbconfig.php';

$data = json_decode(file_get_contents('php://input'));

// echo json_encode($data);

if (isset($data)) {

  // Calculate new stock
  $products = $data->products;
  $stock_mg = [];
  foreach ($products as $product) {
    $stock_mg[$product->id] = $product->stock - $product->qty;
  }
  // print_r($stock_mg);

  $userid = mysqli_real_escape_string($db_conn, trim($data->userid));
  $products = json_encode($products);
  $subtotal = mysqli_real_escape_string($db_conn, trim($data->subtotal));
  $shipping = mysqli_real_escape_string($db_conn, trim($data->shipping));
  $total = mysqli_real_escape_string($db_conn, trim($data->total));
  $address = json_encode($data->address);
  $payment = json_encode($data->payment);

  $sql = "INSERT INTO orders VALUES(NULL, '$userid', '$products', '$subtotal', '$shipping', '$total', '$address', DEFAULT, '$payment', DEFAULT)";
  // echo $sql;

  $result = $db_conn->query($sql);

  if ($db_conn->affected_rows > 0) {
    // Update stock
    foreach ($stock_mg as $key => $value) {
      mysqli_query($db_conn, "UPDATE products SET stock='$value' WHERE id='$key'");
    }
    echo json_encode(['success' => true, 'msg' => 'Order Placed']);
    return;
  } else {
    echo json_encode(['success' => false, 'msg' => 'Failed! Try again']);
    return;
  }
} else {
  echo json_encode(['success' => false, 'msg' => 'Unauthorised Access']);
  return;
}
