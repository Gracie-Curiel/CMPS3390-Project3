<?php

header("Access-Control-Allow-Origin: *");
error_reporting(E_ALL);
ini_set('display_errors', 1);
include 'db.php';

header("Content-Type: application/json");

$method = $_SERVER['REQUEST_METHOD'];

if($method == 'GET'){
    $stmt = $conn->prepare("Select * From user Natural Join recipient Where username = ?");
    $uName = $_GET['username'];
    $stmt->bind_param('s', $uName);
    $stmt->execute();
    $result = $stmt->get_result();
    $data = [];
    while($row = $result->fetch_assoc()){
        $data[] = $row;
    }
    echo json_encode($data);

    $stmt->close();
    $conn->close();
}
?>
