<?php
include 'dbconfig.php';

$data = json_decode(file_get_contents('php://input'));

if (
  isset($data)

) {

  $firstname = mysqli_escape_string($db_conn, trim($data->firstname));
  $lastname = mysqli_escape_string($db_conn, trim($data->lastname));
  $email = mysqli_escape_string($db_conn, trim($data->email));
  $password = mysqli_escape_string($db_conn, trim($data->password));
  // echo json_encode($email);
  // echo json_encode($password);
  if ($firstname !== '' && $email !== '' && $password !== '') {

    $result = mysqli_query($db_conn, "SELECT email FROM users WHERE email='$email'");

    if (mysqli_num_rows($result) === 1) {
      echo json_encode(['success' => false, 'msg' => 'Try With Different Email!']);
      return;
    } else {
      $db_conn->query("INSERT INTO users VALUES(NULL, '$firstname', '$lastname', '$email', '$password', DEFAULT, DEFAULT, DEFAULT)");

      if ($db_conn->affected_rows > 0) {
        echo json_encode(['success' => true, 'msg' => 'Successfully Registered']);
        return;
      } else {
        echo json_encode(['success' => false, 'msg' => 'Try Again']);
        return;
      }
    }
  } else {
    echo json_encode(['success' => false, 'msg' => 'Please Fill out the form']);
    return;
  }
} else {
  echo json_encode(['success' => false, 'msg' => 'Unauthorised Access']);
  return;
}
