<?php

header("Access-Control-Allow-Origin: *");
error_reporting(E_ALL);
ini_set('display_errors', 1);
include 'db.php';

header("Content-Type: application/json");


$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

if($method == 'GET'){
    $username = $_GET['username'];
    $Fname = $_GET['Fname'];
    $Lname = $_GET['Lname'];
    $pass = $_GET['pass'];
    $totalBudget = $_GET['totalBudget'];
    $spentBudget = $_GET['spentBudget'];
    $hash = password_hash($pass, PASSWORD_DEFAULT);

    $stmt = $conn->prepare("Insert Into user (username, Fname, Lname, pass, totalBudget, spentBudget) Values (?,?,?,?,?,?)");
    $stmt->bind_param("ssssdd", $username, $Fname, $Lname, $hash, $totalBudget, $spentBudget);
    $stmt->execute();

    echo "It worked.";



    $stmt->close();
    $conn->close();
}
?>
