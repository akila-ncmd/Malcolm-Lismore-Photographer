<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>
<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $conNo = htmlspecialchars($_POST['conNo']);
    $email = htmlspecialchars($_POST['email']);
    $location = htmlspecialchars($_POST['location']);
    $date = htmlspecialchars($_POST['date']);
    $message = htmlspecialchars($_POST['msg']);
    
    // Database connection
    $conn = new mysqli('localhost', 'root', '', 'malcolm');

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare SQL statement to insert inquiry
    $stmt = $conn->prepare("INSERT INTO inquiry (name, conNo, email, location, date, msg) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $name, $conNo, $email, $location, $date, $message);

    if ($stmt->execute()) {
        echo "Inquiry submitted successfully.";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
    
    // Redirect or display a success message
    header("Location: HomePage.php");
    exit();
}
?>

</body>
</html>
