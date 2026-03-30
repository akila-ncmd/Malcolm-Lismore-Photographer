<?php
		session_start();
		if(isset($_SESSION['RName'])){
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>
<?php
	$user=$_SESSION['RName']; 
 $conn=mysqli_connect('localhost','root','','malcolm'); 
 if($conn){ 
  $queMax="SELECT MAX(LogSerial) FROM logsch GROUP BY RealName HAVING 
RealName='$user' ORDER BY LogSerial DESC LIMIT 1"; 
  if(mysqli_query($conn,$queMax)){ 
   $data=mysqli_query($conn,$queMax); 
   $val=mysqli_fetch_assoc($data); 
   $se=$val["MAX(LogSerial)"]; 
    
   $queUp="UPDATE logsch SET LOUT=(now()) WHERE LogSerial='$se'"; 
   if(mysqli_query($conn,$queUp)){ 
    header("Location:HomePage.php"); 
           } 
   else{ 
    echo 'Login Schedule is NOT Updated!'.mysqli_error($conn); 
    } 
          } 
    } 
 else{ 
  echo 'Database is NOT Connected!'.mysqli_error($conn); 
  } 
          }
?>
</body>
</html>
