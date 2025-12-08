<?php
$servername = "localhost";
$username = "nwilemon";
$password = "Xixm=4Wat";
$dbname = "nwilemon";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
