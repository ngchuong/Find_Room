<?php
	$json = file_get_contents('php://input');
	$obj = json_decode($json, true);
	
	header("Content-Type: application/json; charset=UTF-8");
	header("Access-Control-Allow-Origin: *");
	include_once '../config/connect.php';

	$query = "UPDATE users SET name = '".$obj['name']."',role = '".$obj['role']."',status = '".$obj['status']."' WHERE id = '".$obj['id']."'";
	
	if (mysqli_query($connect, $query)) {
		echo "oke";
		http_response_code(200);
	} else {
		http_response_code(301);
	}

	mysqli_close($connect);
?>