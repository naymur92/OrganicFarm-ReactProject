<?php
include 'dbconfig.php';

// print_r($_FILES['thumb']);
$userData = json_decode($_POST['info']);
// print_r($userData);
$firstname = mysqli_escape_string($db_conn, trim($userData->firstname));
$lastname = mysqli_escape_string($db_conn, trim($userData->lastname));
$email = mysqli_escape_string($db_conn, trim($userData->email));
$password = mysqli_escape_string($db_conn, trim($userData->password));
$role = mysqli_escape_string($db_conn, trim($userData->role));

const DEST_FOLDER = '../assets/images/users/';


if ($firstname !== '' && $email !== '' && $password !== '') {
  // check duplicate email
  $result = mysqli_query($db_conn, "SELECT email FROM users WHERE email = '$email'");
  if (mysqli_num_rows($result) === 1) {
    echo json_encode(['success' => false, 'msg' => 'Try with deferent email']);
    return;
  } else {
    // Insert system
    if ($role === '') {
      $sql = "INSERT INTO users VALUES(NULL, '$firstname', '$lastname', '$email', '$password', DEFAULT, DEFAULT, '', DEFAULT)";
    } else {
      $sql = "INSERT INTO users VALUES(NULL, '$firstname', '$lastname', '$email', '$password', '$role', 'active', '', DEFAULT)";
    }

    mysqli_query($db_conn, $sql);

    if (mysqli_affected_rows($db_conn) > 0) {
      // File upload process
      if (isset($_FILES['thumb'])) {
        $filename = $_FILES['thumb']['name'];
        $tmp_name = $_FILES['thumb']['tmp_name'];

        // generate new file name
        $extArray = explode('.', $filename);
        $ext = trim(end($extArray));

        $result = mysqli_query($db_conn, 'SELECT LAST_INSERT_ID()');
        $last_id = mysqli_fetch_assoc($result)['LAST_INSERT_ID()'];

        $filename = $firstname . '-(' . $last_id . ').' . $ext;

        if (move_uploaded_file($tmp_name, DEST_FOLDER . $filename)) {
          mysqli_query($db_conn, "UPDATE users SET thumbnail='$filename' WHERE id='$last_id'");

          if (mysqli_affected_rows($db_conn) === 0) {
            unlink(DEST_FOLDER . $filename);
          }
        }
      } // End file upload

      echo json_encode(['success' => true, 'msg' => 'Success']);
      return;
    } else {
      echo json_encode(['success' => false, 'msg' => 'Server Problem']);
      return;
    }
  }
} else {
  echo json_encode(['success' => false, 'msg' => 'Please fill out the form']);
  return;
}
