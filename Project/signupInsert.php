<?php
$user = 'root';
$password = 'root';
$db = 'bookstore';
$host = 'localhost';
$port = 3306;

$conn = mysqli_connect(
  $host, 
  $user, 
  $password, 
  $db,
  $port
);

if (!$conn)
{
  echo "Connection failed!";
  exit;
}

session_start();

if(isset($_POST['username1']))
{
	$name = $_POST['username1'];

	$sql = "INSERT INTO user VALUES('$name', );
	$result = mysqli_query($conn, $sql);

	
}
mysqli_close();
?>