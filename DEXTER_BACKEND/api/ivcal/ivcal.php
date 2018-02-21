<!DOCTYPE html>
<html>
<head>
	<script type="text/javascript" src="/ivcal/jquery-2.1.4.min.js"></script>
</head>
<body>
<?php
	if(!isset($_GET['name']) || !isset($_GET['cp']) || !isset($_GET['hp']) || !isset($_GET['dust']) || !isset($_GET['powerup'])) {
		header('Content-Type: text/plain');
		print("Please input correct parameters");
	}
	$poke_info = array(
		'name' => $_GET['name'],
		'cp' => $_GET['cp'],
		'hp' => $_GET['hp'],
		'dust' => $_GET['dust'],
		'powerup' => $_GET['powerup']);
	echo "<script>\n";
	echo "var properties= ". json_encode($poke_info).";";
	echo "</script>";
?>
	<script type="text/javascript" src="/ivcal/ivcal.js"></script>
</body>
</html>
