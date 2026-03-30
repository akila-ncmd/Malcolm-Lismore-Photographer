<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Delete Inquiry</title>
</head>

<body>
<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['id'])) { // Check if 'id' is set
        $InqID = intval($_POST['id']); // Get the InqID from POST data

        // Database connection
        $conn = new mysqli('localhost', 'root', '', 'malcolm');

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Prepare SQL statement to delete inquiry
        $sql = "DELETE FROM inquiry WHERE InqID = ?"; // Use the correct column name

        // Prepare the statement
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $InqID); // Bind the InqID variable as an integer

        if ($stmt->execute() === TRUE) {
            echo "Inquiry deleted successfully.";
        } else {
            echo "Error deleting record: " . $stmt->error;
        }

        // Close the statement and connection
        $stmt->close();
        $conn->close();

        // Redirect back to view inquiries
        header("Location: view-inquiries.php");
        exit();
    } else {
        echo "No inquiry ID was provided.";
    }
}
?>
</body>
</html>


</body>
</html>
