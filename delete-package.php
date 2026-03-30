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

// Check if the ID is set in the URL
if (isset($_POST['id'])) {
    $id = intval($_POST['id']); // Ensure $id is an integer

    // Prepare the SQL statement
    $sql = "DELETE FROM package WHERE PacID = ?";
    $stmt = $conn->prepare($sql);

    if (!$stmt) {
        die("Prepare failed: " . $conn->error); // Display error if prepare fails
    }

    // Bind parameters
    $stmt->bind_param("i", $id);

    // Execute the statement
    if ($stmt->execute()) {
        echo "Package deleted successfully.";
    } else {
        echo "Error deleting package: " . $stmt->error;
    }

    // Close the statement
    $stmt->close();
} else {
    echo "No ID provided.";
}

// Close the database connection
$conn->close();
?>

</body>
</html>
