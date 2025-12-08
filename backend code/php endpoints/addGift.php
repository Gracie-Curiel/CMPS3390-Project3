<?php

header("Access-Control-Allow-Origin: *");
error_reporting(E_ALL);
ini_set('display_errors', 1);
include 'db.php';

header("Content-Type: application/json");


$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

if($method == 'POST'){
    $username = $_GET['username'];
    $Rname = $_GET['recipient'];
    $relationship = $_GET['relationship'];
    $cost = $_GET['budget'];
    $Gname = $_GET['gift'];

    $stmt = $conn->prepare("Insert Into gifts (username, Rname, relationship, cost, Gname) Values (?,?,?,?,?)");
    $stmt->bind_param("sssds", $username, $Rname, $relationship, $cost, $Gname);
    $stmt->execute();

    $stmt = $conn->prepare("Update user Set spentBudget = (Select SUM(cost) From gifts Where username = ?)  Where username = ?");
    $stmt->bind_param("ss", $username, $username);
    $stmt->execute();

    $stmt->close();
    $conn->close();
}
?>
