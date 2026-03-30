<?php
// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Email content
    $to = "malcolm@example.com"; // Replace with Malcolm's email
    $subject = "New Enquiry from Website";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        $status = "Message sent successfully!";
    } else {
        $status = "Failed to send message. Please try again.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Malcolm Lismore</title>
    <link rel="stylesheet" href="HomePage.css">
    <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css"
        rel="stylesheet"
    />
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
    />
</head>
<body>
    <header>
        <div class="nav-bar">
            <div class="icon"><img src="Images/web-icon.png" style="width: 200px; margin-top: 10px; margin-left: 20px;"></div>
            <div class="list">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="about_page.php">About</a></li>
                    <li><a href="gallery.php">Gallery</a></li>
                    <li><a href="prices.php">Prices</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </header>
    
    <!-- Home Section -->
    <section id="home">
        <div class="main">
            <div class="body-main">
                <div class="welcome-text">
                    <h1>Welcome to Malcolm Lismore Photography Website</h1>
                    <p>Capturing the beauty of nature</p>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="about-website" id="about">
        <h2>WE CAPTURE THE MOMENTS</h2>
        <p class="description">
            At Capturer, we specialize in freezing those fleeting moments in time
            that hold immense significance for you. With our passion for photography
            and keen eye for detail, we transform ordinary moments into
            extraordinary memories.
        </p>
        <div class="about-btn">
            <button class="btn"><a href="about_page.php">VIEW ABOUT</a></button>
        </div>
    </section>

    <!-- Gallery Section -->
    <section class="section__container gallery__container" id="gallery">
        <h2 class="section__header">~ GALLERY ~</h2>
        <div class="gallery__grid">
            <img src="Images/1.jpg" alt="gallery" width="100" height="100" />
            <img src="Images/2.jpg" alt="gallery" width="100" height="100" />
            <img src="Images/3.jpg" alt="gallery" width="100" height="100" />
            <img src="Images/4.jpg" alt="gallery" width="100" height="100" />
        </div>
        <div class="gallery__btn">
            <button class="btn" id="viewGalleryBtn">VIEW GALLERY</button>
        </div>
    </section>

    <!-- Contact Section -->
    <footer id="contact">
        <div class="contact-info">
            <h2>Contact Malcolm Lismore</h2>
            <p>Email: malcolm@example.com</p>
            <p>Phone: +123 456 7890</p>

            <!-- Contact Form -->
            <form action="" method="POST">
                <input type="text" name="name" placeholder="Your Name" required>
                <input type="email" name="email" placeholder="Your Email" required>
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit" class="btn">Send Message</button>
            </form>
            
            <?php
            if (isset($status)) {
                echo "<p>$status</p>";
            }
            ?>
        </div>
    </footer>

    <script>
        document.getElementById('viewGalleryBtn').addEventListener('click', function() {
            document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
        });
    </script>
</body>
</html>
