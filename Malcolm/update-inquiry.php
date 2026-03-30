<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update Inquiry</title>
</head>
<body>
    <?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        // Get the values from POST data
        $InqID = intval($_POST['id']);
        $name = $_POST['name'];
        $conNo = $_POST['conNo'];
        $email = $_POST['email'];
        $location = $_POST['location'];
        $msg = $_POST['msg'];

        // Database connection
        $conn = new mysqli('localhost', 'root', '', 'malcolm');

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Prepare SQL statement to update inquiry
        $sql = "UPDATE inquiry SET name=?, conNo=?, email=?, location=?, msg=? WHERE InqID=?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssssi", $name, $conNo, $email, $location, $msg, $InqID);

        if ($stmt->execute() === TRUE) {
            echo "Inquiry updated successfully.";
        } else {
            echo "Error updating record: " . $stmt->error;
        }

        // Close the statement and connection
        $stmt->close();
        $conn->close();

        // Redirect back to view inquiries
        header("Location: view-inquiries.php");
        exit();
    } else {
        echo "Invalid request.";
    }
    ?>
</body>
</html>
