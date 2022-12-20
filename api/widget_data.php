<?php

include './dbconfig.php';

$result = mysqli_query($db_conn, "SELECT COUNT(id) FROM users WHERE role = 'user'");
$row = mysqli_fetch_array($result);
$users = $row[0];

$result = mysqli_query($db_conn, "SELECT COUNT(id) FROM users WHERE role != 'user'");
$row = mysqli_fetch_array($result);
$employees = $row[0];

$result = mysqli_query($db_conn, "SELECT COUNT(id) FROM products");
$row = mysqli_fetch_array($result);
$products = $row[0];

$result = mysqli_query($db_conn, "SELECT SUM(subtotal) FROM orders WHERE status='delivered'");
$row = mysqli_fetch_array($result);
$total_sale = $row[0];

$result = mysqli_query($db_conn, "SELECT SUM(amount) FROM harvests");
$row = mysqli_fetch_array($result);
$total_harvest = $row[0];

echo json_encode(['users' => $users, 'employees' => $employees, 'products' => $products, 'total_sale' => $total_sale, 'total_harvest' => $total_harvest]);
