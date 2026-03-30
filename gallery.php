<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gallery - Malcolm Lismore Photography</title>
    <link rel="icon" href="Images/favicon.png">
    <link rel="stylesheet" href="gallery.css">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css" rel="stylesheet" />
</head>

<body>


    <header>
        <div class="nav-bar">
            <div class="icon">
                <img src="Images/web-icon.png" alt="Website Icon" style="width: 200px; margin-top: 10px; margin-left: 20px;">
            </div>
            <div class="list">
                <ul>
                 <li><a href="HomePage.php">Home</a></li>
                <li><a href="about_page.php">About</a></li>
                <li><a href="gallery.php">Gallery</a></li>
                <li><a href="prices.php">Prices</a></li>
                <li><a href="inquiry.html">Inquiry</a></li>
                <li><a href="LOGIN.html">Admin</a></li>
                </ul>
                </ul>
            </div>
        </div>
    </header>
      <main>
        <div class="gallery">
<body>
    <?php
    // Database connection
    $db = new mysqli('localhost', 'root', '', 'malcolm')
    
    ?>
</body>
        </div>
    </main>

    <section class="gallery-section">
        <h2 class="gallery-title"> GALLERY </h2>
        <div class="category-buttons">
            <button onClick="filterGallery('all')">All</button>
            <button onClick="filterGallery('scotland')">Scotland</button>
            <button onClick="filterGallery('wildlife')">Wildlife</button>
            <button onClick="filterGallery('coastal')">Coastal Birds</button>
            <button onClick="filterGallery('weddings')">Weddings</button>
            <button onClick="filterGallery('birthdays')">Birthdays</button>
            <button onClick="filterGallery('portraits')">Portraits</button>
            <button onClick="filterGallery('functions')">Functions</button>
            <button onClick="filterGallery('parties')">Parties</button>
        </div>

        <div id="galleryImages" class="gallery-grid">
     <?php
	 
	 	/*Scotland images*/
     	 $images = mysqli_query($db, "SELECT * FROM gal WHERE category='Scotland'");
        while ($image = mysqli_fetch_assoc($images)) {
            echo "<div class='gallery-item scotland'>
        <img src= '".$image['path']."' alt='Scotland' />
        <p>Scotland</p>
    </div>" ;
        }
		/*Wildlife images*/
		$images = mysqli_query($db, "SELECT * FROM gal WHERE category='Wildlife'");
        while ($image = mysqli_fetch_assoc($images)) {
            echo "<div class='gallery-item wildlife'>
        <img src= '".$image['path']."' alt='Wildlife' />
        <p>Wildlife</p>
    </div>" ;
        }
				/*Coastal Birds images*/
		$images = mysqli_query($db, "SELECT * FROM gal WHERE category='Coastal Birds'");
        while ($image = mysqli_fetch_assoc($images)) {
            echo "<div class='gallery-item coastal birds'>
        <img src= '".$image['path']."' alt='Coastal Birds' />
        <p>Coastal Birds</p>
    </div>" ;
        }
						/*Weddings images*/
		$images = mysqli_query($db, "SELECT * FROM gal WHERE category='Weddings'");
        while ($image = mysqli_fetch_assoc($images)) {
            echo "<div class='gallery-item weddings'>
        <img src= '".$image['path']."' alt='Weddings' />
        <p>Weddings</p>
    </div>" ;
        }
								/*Parties images*/
		$images = mysqli_query($db, "SELECT * FROM gal WHERE category='Parties'");
        while ($image = mysqli_fetch_assoc($images)) {
            echo "<div class='gallery-item parties'>
        <img src= '".$image['path']."' alt='Parties' />
        <p>Parties</p>
    </div>" ;
        }
								/*Functions images*/
		$images = mysqli_query($db, "SELECT * FROM gal WHERE category='Functions'");
        while ($image = mysqli_fetch_assoc($images)) {
            echo "<div class='gallery-item functions'>
        <img src= '".$image['path']."' alt='Functions' />
        <p>Functions</p>
    </div>" ;
        }
												/*Portraits images*/
		$images = mysqli_query($db, "SELECT * FROM gal WHERE category='Portraits'");
        while ($image = mysqli_fetch_assoc($images)) {
            echo "<div class='gallery-item potraits'>
        <img src= '".$image['path']."' alt='Portraits' />
        <p>Portraits</p>
    </div>" ;
        }
								/*Birthdays images*/
		$images = mysqli_query($db, "SELECT * FROM gal WHERE category='Birthdays'");
        while ($image = mysqli_fetch_assoc($images)) {
            echo "<div class='gallery-item birthdays'>
        <img src= '".$image['path']."' alt='Birthdays' />
        <p>Birthdays</p>
    </div>" ;
        }

	 ?>
   
</div>

    </section>

    <footer id="contact">
        <div class="footer__container">
            <div class="footer__col">
            </div>
            <p class="footer__col-1" align="center">
                Keep up-to-date with all things Capturer! Join our community and never miss a moment!
            </p>
                    <div class="social-media-icons" align="center"><br><br>
            <a href="https://www.instagram.com/malcolmlismore" target="_blank"><i class="ri-instagram-line"></i> Instagram</a>
            <a href="https://www.facebook.com/malcolmlismore" target="_blank"><i class="ri-facebook-line"></i> Facebook</a> 
            <a href="https://wa.me/phone-number" target="_blank"><i class="ri-whatsapp-line"></i> Whatsapp</a>
            <a href="https://www.linkedin.com/in/malcolmlismore" target="_blank"><i class="ri-linkedin-line"></i> LinkedIn</a>
        </div>
        </div>
        <div class="footer__bar">
            Copyright © 2023 Malcolm Lismore Photography. All rights reserved.
        </div>
    </footer>
<!-- Modal for image viewing -->
    <div id="imageModal" class="modal">
        <span class="close" onClick="closeModal()">&times;</span>
        <img class="modal-content" id="modalImage">
        <div id="caption"></div>
        <button class="landscape" onClick="viewInLandscape()">Landscape</button>
        <button class="portrait" onClick="viewInPortrait()">Portrait</button>
    </div>

    <script>
    function filterGallery(category) {
        const items = document.querySelectorAll('.gallery-item');
        items.forEach(item => {
            if (category === 'all') {
                item.style.display = 'block'; // Show all items
            } else {
                item.style.display = item.classList.contains(category) ? 'block' : 'none'; // Show matching items
            }
        });
    }

    // Open the modal when an image is clicked
    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', function() {
            const modal = document.getElementById('imageModal');
            const modalImg = document.getElementById('modalImage');
            modal.style.display = 'block';
            modalImg.src = this.src; // Set the modal image to the clicked image
        });
    });
	  function openModal(imageSrc, caption) {
        document.getElementById('modalImage').src = imageSrc;
        document.getElementById('caption').innerText = caption;
        document.getElementById('imageModal').style.display = 'block';
    }


    // Close the modal
    function closeModal() {
        document.getElementById('imageModal').style.display = 'none';
    }

    // View in Landscape
    function viewInLandscape() {
        const modalImg = document.getElementById('modalImage');
        modalImg.style.width = '100%'; // Set the width for landscape
        modalImg.style.height = 'auto'; // Auto height
    }

    // View in Portrait
    function viewInPortrait() {
        const modalImg = document.getElementById('modalImage');
        modalImg.style.width = 'auto'; // Auto width
        modalImg.style.height = '100%'; // Set height for portrait
    }
	// Close modal when clicking outside of the image
    window.onclick = function (event) {
        const modal = document.getElementById('imageModal');
        if (event.target == modal) {
            closeModal();
        }
    }
    </script>

    <style>
    /* Modal styles */
    .modal {
        display: none; 
        position: fixed; 
        z-index: 1000; 
        left: 0;
        top: 0;
        width: 100%; 
        height: 100%; 
        overflow: auto; 
        background-color: rgba(0, 0, 0, 0.8);
    }

    .modal-content {
        margin: auto;
        display: block;
        max-width: 90%;
        max-height: 90%;
    }

    .close {
        position: absolute;
        top: 10px;
        right: 25px;
        color: white;
        font-size: 35px;
        font-weight: bold;
        cursor: pointer;
    }

    button.landscape, button.portrait {
        margin: 10px;
        padding: 10px;
        background-color: #fff;
        border: none;
        cursor: pointer;
        font-size: 16px;
    }
	
    </style>
</body>
</html>
