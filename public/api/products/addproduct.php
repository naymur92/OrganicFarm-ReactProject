<?php
include '../dbconfig.php';

$product = json_decode($_POST['prodinfo']);

$name = mysqli_real_escape_string($db_conn, trim($product->name));
$description = mysqli_real_escape_string($db_conn, trim($product->description));
$price = mysqli_real_escape_string($db_conn, trim($product->price));
$category = mysqli_real_escape_string($db_conn, trim($product->category));
$status = mysqli_real_escape_string($db_conn, trim($product->status));
$stock = mysqli_real_escape_string($db_conn, trim($product->stock));

const DEST_FOLDER = '../../assets/images/product/';

if ($name !== '' && $price !== '' && $status !== '') {

  $sql = "INSERT INTO products VALUES(NULL, '$name', '$description', '$price', '$category', '$status', '', '$stock', DEFAULT)";
  // // echo $sql;

  $result = $db_conn->query($sql);

  if ($db_conn->affected_rows > 0) {

    // File upload process
    if (isset($_FILES['thumb'])) {
      $filename = $_FILES['thumb']['name'];
      $tmp_name = $_FILES['thumb']['tmp_name'];

      // generate new file name
      $extArray = explode('.', $filename);
      $ext = trim(end($extArray));

      $result = mysqli_query($db_conn, 'SELECT LAST_INSERT_ID()');
      $last_id = mysqli_fetch_assoc($result)['LAST_INSERT_ID()'];

      $filename = $category . '-(' . $last_id . ').' . $ext;

      if (move_uploaded_file($tmp_name, DEST_FOLDER . $filename)) {
        mysqli_query($db_conn, "UPDATE products SET thumbnail='$filename' WHERE id='$last_id'");

        if (mysqli_affected_rows($db_conn) === 0) {
          unlink(DEST_FOLDER . $filename);
        }
      }
    } // End file upload

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
