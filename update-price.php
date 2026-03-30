<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update Package Price</title>
    <link rel="stylesheet" href="admin.css"> <!-- Link your CSS file -->
</head>
<body>
    <?php
    // Database connection
    $conn = new mysqli('localhost', 'root', '', 'malcolm');

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Check if the form is submitted
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        // Get data from POST request
        $price = floatval($_POST['price']); // Ensure $price is a float
        $id = intval($_POST['id']); // Ensure $id is an integer

        // Prepare the SQL statement
        $sql = "UPDATE package SET Prices = ? WHERE PacID = ?";
        $stmt = $conn->prepare($sql);

        // Error checking for SQL preparation
        if (!$stmt) {
            die("Prepare failed: " . $conn->error); // Display an error message if prepare fails
        }

        // Bind parameters (d = double/float, i = integer)
        $stmt->bind_param("di", $price, $id);

        // Execute the statement and check for success
        if ($stmt->execute()) {
            echo "<p>Price updated successfully.</p>";
        } else {
            echo "<p>Error updating price: " . $stmt->error . "</p>";
        }

        // Close the statement
        $stmt->close();
    }

    // Close the database connection
    $conn->close();
    ?>

</body>
</html>
