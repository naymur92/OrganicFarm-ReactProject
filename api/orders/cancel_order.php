<?php
include '../dbconfig.php';

$data = json_decode(file_get_contents('php://input'));

// echo json_encode($data);

if (isset($data)) {

  // Calculate new stock
  $products = $data->products;
  $stock_mg = [];
  foreach ($products as $product) {
    $stock_mg[$product->id] = $product->qty;
  }
  // print_r($stock_mg);  

  $order_id = mysqli_real_escape_string($db_conn, trim($data->id));

  $sql = "UPDATE orders SET status='cancelled' WHERE id=$order_id";
  // echo $sql;

  $result = $db_conn->query($sql);

  if ($db_conn->affected_rows > 0) {
    // Update stock in database
    foreach ($stock_mg as $key => $value) {
      mysqli_query($db_conn, "UPDATE products SET stock=stock + $value WHERE id='$key'");
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
