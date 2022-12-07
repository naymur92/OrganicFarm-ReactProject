<?php
include 'dbconfig.php';
if (isset($_GET['userInfo'])) {
  $data = $_GET['userInfo'];

  $email = mysqli_escape_string($db_conn, trim($data['email']));
  $password = mysqli_escape_string($db_conn, trim($data['password']));
  // echo json_encode($email);
  // echo json_encode($password);
  if ($email != '' && $password != '') {
    $result = $db_conn->query("SELECT * FROM employees WHERE email='$email' AND password='$password' AND (role='admin' OR role='manager')");

    if ($result->num_rows === 1) {
      echo json_encode(['success' => true, 'msg' => 'Login Success']);
      return;
    } else {
      echo json_encode(['success' => false, 'msg' => 'Email or password incorrect']);
      return;
    }
  } else {
    echo json_encode(['success' => false, 'msg' => 'Please Fill out the form']);
    return;
  }
} else {
  echo json_encode(['success' => false, 'msg' => 'Unauthorised Access']);
  return;
}
