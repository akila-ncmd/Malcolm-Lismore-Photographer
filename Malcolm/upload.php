<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>
<?php
if (isset($_POST['upload'])) {
    $image = $_FILES['image']['name'];
    $category = $_POST['category'];
    $target = "Images/" . basename($image);

    // Database connection
    $db = new mysqli('localhost', 'root', '', 'malcolm');

    // Insert image info into the database
    $sql = "INSERT INTO gal (category, path) VALUES ('$category', '$target')";
    mysqli_query($db, $sql);

    // Move the uploaded image to the uploads folder
    if (move_uploaded_file($_FILES['image']['tmp_name'], $target)) {
        echo "Image uploaded successfully!";
    } else {
        echo "Failed to upload image.";
    }

    mysqli_close($db);
}
?>

</body>
</html>
