<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prices - Malcolm Lismore Photography</title>
    <link rel="stylesheet" href="prices.css"> <!-- Link to the main CSS file -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <div class="nav-bar">
        <div class="icon">
            <img src="Images/web-icon.png" alt="Malcolm Lismore Photography">
        </div>
        <div class="list">
            <ul>
                <li><a href="HomePage.php">Home</a></li>
                <li><a href="about_page.php">About</a></li>
                <li><a href="gallery.php">Gallery</a></li>
                <li><a href="prices.php" class="active">Prices</a></li>
                <li><a href="inquiry.html">Inquiry</a></li>
                <li><a href="login.html">Admin</a></li>
            </ul>
        </div>
    </div>

    <div class="prices-section">
        <h1>Photography Prices</h1>
        <p>At Malcolm Lismore Photography, we offer competitive pricing for a variety of services.</p>

        <div class="price-table">
            <h2>Standard Packages</h2>
            <table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    // Database connection
                    $conn = new mysqli('localhost', 'root', '', 'malcolm');

                    // Check the connection
                    if ($conn->connect_error) {
                        die("Connection failed: " . $conn->connect_error);
                    }

                    // Fetch data from the package table
                    $sql = "SELECT Category, Prices FROM package";
                    $result = $conn->query($sql);

                    if ($result->num_rows > 0) {
                        // Output data of each row
                        while($row = $result->fetch_assoc()) {
                            // Convert Prices to float and format it properly
                            $price = floatval(preg_replace('/[^0-9.]/', '', $row["Prices"]));
                            echo "<tr>
                                    <td>" . htmlspecialchars($row["Category"]) . "</td>
                                    <td>£" . htmlspecialchars(number_format($price, 2)) . "</td>
                                  </tr>";
                        }
                    } else {
                        echo "<tr><td colspan='2'>No packages available</td></tr>";
                    }

                    // Close connection
                    $conn->close();
                    ?>
                </tbody>
            </table>
        </div>

        <div class="custom-package">
            <h2>Custom Packages</h2>
            <p>If you're looking for a custom package tailored to your specific needs, please contact us for a personalized quote!</p>
        </div>

        <div class="enquiry-section">
            <h2>Make an Inquiry</h2>
            <p>If you would like to book a session or need more information, please fill out the inquiry form.</p>
            <a href="inquiry.html" class="btn">Go to Inquiry Form</a>
        </div>
    </div>

    <footer>
        <div class="footer__col">
            <h4>Quick Links</h4>
            <ul>
                <li><a href="HomePage.php">Home</a></li>
                <li><a href="about_page.php">About</a></li>
                <li><a href="gallery.php">Gallery</a></li>
                <li><a href="prices.php">Prices</a></li>
                <li><a href="inquiry.html">Inquiry</a></li>
            </ul>
        </div>
        <div class="footer__col">
            <h4>Contact</h4>
            <ul>
                <li><a href="mailto:info@malcolmlismore.com">info@malcolmlismore.com</a></li>
                <li><a href="tel:+441234567890">+44 123 456 7890</a></li>
            </ul>
        </div>
        <div class="footer__col social-media-icons">
            <h4>Follow Me</h4>
            <a href="https://www.facebook.com/malcolmlismore" target="_blank"><i class="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/malcolmlismore" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://wa.me/441234567890" target="_blank"><i class="fab fa-whatsapp"></i></a>
            <a href="https://www.linkedin.com/in/malcolmlismore" target="_blank"><i class="fab fa-linkedin"></i></a>
        </div>
        <div class="footer__bar">
            <p>&copy; 2023 Malcolm Lismore Photography. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>
