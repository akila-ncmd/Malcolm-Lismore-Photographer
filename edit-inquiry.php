<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Inquiry</title>
    <link rel="stylesheet" href="admin.css"> <!-- Link your CSS file -->
</head>
<body>
    <?php
    // Database connection
    $conn = new mysqli('localhost', 'root', '', 'malcolm');

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Check if the ID is set in the URL
    if (isset($_GET['id'])) {
        $InqID = intval($_GET['id']);

        // Fetch the inquiry details
        $sql = "SELECT * FROM inquiry WHERE InqID = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $InqID);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
        } else {
            echo "No inquiry found.";
            exit();
        }
    } else {
        echo "No inquiry ID provided.";
        exit();
    }
    ?>

    <h1>Edit Inquiry</h1>
    <form action="update-inquiry.php" method="POST">
        <input type="hidden" name="id" value="<?php echo $row['InqID']; ?>">
        <label for="name">Name:</label>
        <input type="text" name="name" value="<?php echo htmlspecialchars($row['name']); ?>" required>
        <br>
        <label for="conNo">Contact Number:</label>
        <input type="text" name="conNo" value="<?php echo htmlspecialchars($row['conNo']); ?>" required>
        <br>
        <label for="email">Email:</label>
        <input type="email" name="email" value="<?php echo htmlspecialchars($row['email']); ?>" required>
        <br>
        <label for="location">Location:</label>
        <input type="text" name="location" value="<?php echo htmlspecialchars($row['location']); ?>" required>
        <br>
        <label for="msg">Message:</label>
        <textarea name="msg" required><?php echo htmlspecialchars($row['msg']); ?></textarea>
        <br>
        <button type="submit">Update Inquiry</button>
    </form>

    <?php
    // Close the database connection
    $stmt->close();
    $conn->close();
    ?>
</body>
</html>
