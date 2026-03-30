<?php
	session_start();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Log Process</title>
</head>

<body>
<?php
	$un=$_POST['txtUN']; 
    $pw=$_POST['txtPW'];

	$conn=mysqli_connect('localhost','root','','malcolm'); 
  
 if($conn){ 
  $queLog="SELECT * FROM usertbl WHERE Username='$un' AND Password='$pw'"; 
   
  if(mysqli_query($conn,$queLog)){ 
   $rest=mysqli_query($conn,$queLog); 
    
   if(mysqli_num_rows($rest)>0){ 
    $val=mysqli_fetch_assoc($rest); 
     
    if($val["Password"]==$pw){ 
     $_SESSION['RName']=$val["RealName"]; 
     $rN=$_SESSION['RName']; 
      
    $queSave="INSERT INTO logsch(RealName,LIN) VALUES('$rN',(now()))"; 
      
     if(mysqli_query($conn,$queSave)){ 
      header("Location:admin.html");	
	  } 
           } 
           } 
   else{ 
    echo 'Incorrect Username or Password!!!...<br> 
   <a href="LOGIN.html"><img src="Images\Right Arrow.jpg" width="100" height="100"></a>'; 
    } 
          } 
  else{ 
   echo 'Login Query Not execute!'.mysqli_error($conn); 
   } 
 } 
 else{ 
  echo 'Database is NOT Connected!'.mysqli_error($conn); 
 } 
?>
</body>
</html>
