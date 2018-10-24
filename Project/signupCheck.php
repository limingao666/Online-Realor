<?php
$user = 'root';
$password = 'root';
$db = 'project';
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

	$sql = "SELECT username FROM user WHERE username='$name' ";
	$result = mysqli_query($conn, $sql);

	if(mysqli_num_rows($result) < 1)
	{
	    echo "OK";
    }
    else
    {
	    echo "This Username is already exist";
    }
    exit();
}


if(isset($_POST['email1']))
{
	$email = $_POST['email1'];

	$sql1 = "SELECT email FROM user WHERE email='$email' ";
	$result1 = mysqli_query($conn, $sql1);

	if(mysqli_num_rows($result1) < 1)
	{
	    echo "OK";
    }
    else
    {
	    echo "This Email address is already exist";
    }
    exit();
}
mysqli_close();
?>