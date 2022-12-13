<?php
include '../dbconfig.php';

$data = json_decode(file_get_contents('php://input'));

if (isset($data)) {
  $userid = mysqli_real_escape_string($db_conn, trim($data->userid));
  $prodid = mysqli_real_escape_string($db_conn, trim($data->prodid));

  $result = mysqli_query($db_conn, "SELECT * FROM favourites WHERE user_id='$userid' AND prod_id='$prodid'");
  if (mysqli_num_rows($result) === 1) {
    echo json_encode(['success' => false, 'msg' => 'Already in Favourites!']);
    return;
  } else {
    $sql = "INSERT INTO favourites VALUES(NULL, '$userid', '$prodid', DEFAULT)";
    // echo $sql;
    $result = $db_conn->query($sql);

    if ($db_conn->affected_rows > 0) {
      echo json_encode(['success' => true, 'msg' => 'Added to Favourites']);
      return;
    } else {
      echo json_encode(['success' => false, 'msg' => 'Failed! Try again']);
      return;
    }
  }
} else {
  echo json_encode(['success' => false, 'msg' => 'Unauthorised Access']);
  return;
}
$db_conn->close();
