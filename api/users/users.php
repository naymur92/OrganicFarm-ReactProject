<?php
include '../dbconfig.php';

$result = $db_conn->query("SELECT id, firstname, lastname, email, role, status, creation_time FROM users");

if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $users[] = $row;
  }
  echo json_encode(["success" => true, "msg" => "User list generated", "users" => $users]);
  return;
} else {
  echo json_encode(["success" => false, "msg" => 'No users']);
  return;
}
$db_conn->close();
