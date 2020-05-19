<?php

	$json = file_get_contents('php://input');
	$obj = json_decode($json, true);
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	include_once '../config/connect.php';

	$query = "INSERT INTO users(name, role, status) VALUES ('".$obj['name']."', '".$obj['role']."', '".$obj['status']."')";
	
	
	if (mysqli_query($connect, $query)) {
		
		$queryGet = "SELECT * FROM `users` WHERE id=(SELECT MAX(id) FROM `users`)";
		$sql = mysqli_query($connect, $queryGet);
		
		while($row = mysqli_fetch_assoc($sql)) {
			$temp = $row;
		}
		http_response_code(200);
		echo json_encode($temp);
	} else {
		http_response_code(301);
	}

	mysqli_close($connect);

?>