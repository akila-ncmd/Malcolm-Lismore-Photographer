<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Inquiries - Malcolm Lismore Photography</title>
    <link rel="stylesheet" href="inquiry.css"> <!-- Optional: Use your existing CSS -->
</head>
<body>
    <header>
        <div class="nav-bar">
            <div class="icon">
                <img src="Images/web-icon.png" alt="Website Icon" style="width: 200px; margin-top: 10px; margin-left: 20px;">
            </div>
            <div class="list">
                <ul>
                    <li><a href="Admin.html">Admin Panel</a></li>
                </ul>
            </div>
        </div>
    </header>

    <main class="admin-page">
        <h1>Customer Inquiries</h1>
        <p>Below are the inquiries received from customers.</p>
        
        <?php
        // Database connection
        $conn = new mysqli('localhost', 'root', '', 'malcolm');

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Fetch inquiries
        $sql = "SELECT * FROM inquiry";
        $result = $conn->query($sql);

        if ($result->num_rows > 0): ?>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Contact Number</th>
                        <th>Email</th>
                        <th>Location</th>
                        <th>Date</th>
                        <th>Message</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <?php while ($row = $result->fetch_assoc()): ?>
                        <tr>
                            <td><?php echo $row['InqID']; ?></td>
                            <td><?php echo htmlspecialchars($row['name']); ?></td>
                            <td><?php echo htmlspecialchars($row['conNo']); ?></td>
                            <td><?php echo htmlspecialchars($row['email']); ?></td>
                            <td><?php echo htmlspecialchars($row['location']); ?></td>
                            <td><?php echo htmlspecialchars($row['date']); ?></td>
                            <td><?php echo nl2br(htmlspecialchars($row['msg'])); ?></td>
                            <td><?php echo htmlspecialchars($row['Status']); ?></td>
                            <td>
                                <form action="inquiry_status.php" method="GET" style="display:inline;">
                                    <input type="hidden" name="id" value="<?php echo $row['InqID']; ?>">
                                    <button type="submit">View</button>
                                </form>
                                <form action="delete-inquiry.php" method="POST" style="display:inline;">
                                    <input type="hidden" name="id" value="<?php echo $row['InqID']; ?>"><br><br>
                                    <button type="submit" onClick="return confirm('Are you sure you want to delete this inquiry?');">Delete</button>
                                </form>
                            </td>
                        </tr>
                    <?php endwhile; ?>
                </tbody>
            </table>
        <?php else: ?>
            <p>No inquiries found.</p>
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
