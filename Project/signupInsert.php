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

$name = $_POST['username1'];
$email = $_POST['email1'];
$pwd = $_POST["password1"];
$hashPwd = password_hash($pwd, PASSWORD_DEFAULT);
$fname = $_POST["fname1"];
$lname = $_POST["lname1"];
$optradio = $_POST['optradio'];

if(isset($_POST["submit"]))
{
    $sql = "INSERT INTO `user`(`username`, `email`, `password`, `hashPassword`, `firstName`, `lastName`, `agent`) VALUES('$name', '$email', '$pwd', '$hashPwd', '$fname', '$lname', '$optradio')";
    $result = mysqli_query($conn, $sql);

    if($result)
    {
        echo "Records added successfully.";
    }
    else
    {
        echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);      
    }
}

mysqli_close();
?>
