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

// Get the inquiry ID from the URL
if (isset($_GET['id'])) {
    $inquiryId = $_GET['id'];

    // Update the inquiry status to 'Seen'
    $updateStatusQuery = "UPDATE inquiry SET Status='Seen' WHERE InqID=?";
    $stmt = $conn->prepare($updateStatusQuery);
    $stmt->bind_param("i", $inquiryId);
    $stmt->execute();
    
    // Fetch the updated inquiry details
    $sql = "SELECT * FROM inquiry WHERE InqID=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $inquiryId);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        $inquiry = $result->fetch_assoc();
    } else {
        echo "Inquiry not found.";
        exit;
    }
    $stmt->close();
} else {
    echo "No inquiry ID specified.";
    exit;
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Inquiry - Malcolm Lismore Photography</title>
</head>
<body>
    <h1>View Inquiry</h1>
    <p><strong>Name:</strong> <?php echo htmlspecialchars($inquiry['name']); ?></p>
    <p><strong>Contact Number:</strong> <?php echo htmlspecialchars($inquiry['conNo']); ?></p>
    <p><strong>Email:</strong> <?php echo htmlspecialchars($inquiry['email']); ?></p>
    <p><strong>Location:</strong> <?php echo htmlspecialchars($inquiry['location']); ?></p>
    <p><strong>Date:</strong> <?php echo htmlspecialchars($inquiry['date']); ?></p>
    <p><strong>Message:</strong><br><?php echo nl2br(htmlspecialchars($inquiry['msg'])); ?></p>
    <p><strong>Status:</strong> <?php echo htmlspecialchars($inquiry['Status']); ?></p>
    <a href="view-inquiries.php">Back to Inquiries</a>
</body>
</html>

</body>
</html>
