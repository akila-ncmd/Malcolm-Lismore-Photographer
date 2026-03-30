<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manage Prices - Malcolm Lismore Photography</title>
    <link rel="stylesheet" href="manage-price.css"> <!-- Link your CSS file -->
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="navbar-logo">
                <a href="admin.html"><img src="Images/web-icon.png" alt="Malcolm's Logo"></a>
            </div>
            <ul>
                <li><a href="admin.html">Admin Panel</a></li>
            </ul>
        </nav>
    </header>

    <main class="admin-page">
        <h1>Manage Prices</h1>
        <p>Below are the package details. You can update the prices as needed.</p>
        
        <?php
        // Database connection
        $conn = new mysqli('localhost', 'root', '', 'malcolm');

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Fetch package details
        $sql = "SELECT * FROM package";
        $result = $conn->query($sql);

        if ($result->num_rows > 0): ?>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Package Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <?php while ($row = $result->fetch_assoc()): ?>
                        <tr>
                            <td><?php echo $row['PacID']; ?></td>
                            <td><?php echo htmlspecialchars($row['Category']); ?></td>
                            <td>
                                <form action="update-price.php" method="POST">
                                    <input type="hidden" name="id" value="<?php echo $row['PacID']; ?>">
                                    <input type="text" name="price" value="<?php echo htmlspecialchars($row['Prices']); ?>" required>
                                    <button type="submit">Update</button>
                                </form>
                            </td>
                            <td>
                                <form action="delete-package.php" method="POST" style="display:inline;">
                                    <input type="hidden" name="id" value="<?php echo $row['PacID']; ?>">
                                    <button type="submit" onClick="return confirm('Are you sure you want to delete this package?');">Delete</button>
                                </form>
                            </td>
                        </tr>
                    <?php endwhile; ?>
                </tbody>
            </table>
        <?php else: ?>
            <p>No packages found.</p>
        <?php endif; ?>

        <?php
        // Close the database connection
        $conn->close();
        ?>
    </main>

    <footer>
        <p>&copy; 2023 Malcolm Lismore Photography</p>
    </footer>
</body>
</html>
