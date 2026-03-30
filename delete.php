<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>
<?php
// Database connection
$conn = new mysqli('localhost', 'root', '', 'malcolm');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle photo deletion
if ($_SERVER['REQUEST_METHOD'] == 'POST' && $_POST['action'] == 'delete') {
    $id = $conn->real_escape_string($_POST['id']);
    
    // Prepare SQL statement to delete the photo
    $sql = "DELETE FROM gal WHERE id='$id'";
    
    if ($conn->query($sql) === TRUE) {
        echo "Photo deleted successfully.";
    } else {
        echo "Error deleting photo: " . $conn->error;
    }
}

$conn->close();

// Redirect back to manage-gallery.html
header("Location: manage-gallery.html");
exit();
?>


</body>
</html>
