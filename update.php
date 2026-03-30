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

// Handle the update action
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['action']) && $_POST['action'] == 'update') {
    $id = $conn->real_escape_string($_POST['id']);
    $category = $conn->real_escape_string($_POST['category']);
    
    // Check if a new image was uploaded
    if (isset($_FILES['image']) && $_FILES['image']['error'] == 0) {
        $target_dir = "Images/"; // Ensure this directory exists
        $target_file = $target_dir . basename($_FILES["image"]["name"]);
        
        // Move the uploaded file to the target directory
        if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
            // Prepare SQL statement to update image path and category
            $sql = "UPDATE gal SET category='$category', path='$target_file' WHERE id='$id'";
            if ($conn->query($sql) === TRUE) {
                echo "Photo updated successfully.";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    } else {
        // Handle the case where no new image is uploaded
        $sql = "UPDATE gal SET category='$category' WHERE id='$id'";
        if ($conn->query($sql) === TRUE) {
            echo "Photo category updated successfully without changing the image.";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
}

$conn->close();

// Redirect back to manage-gallery.html or a specific page
header("Location: manage-gallery.html");
exit();
?>

</body>
</html>

</body>
</html>
