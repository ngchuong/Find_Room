<?php 

	$json = file_get_contents('php://input');
	$obj = json_decode($json, true);
	header("Content-Type: application/json; charset=UTF-8");
	header("Access-Control-Allow-Origin: *");
	include_once('../config/connect.php');

	$query = "DELETE FROM users WHERE id = '".$obj['id']."'";
	
	if (mysqli_query($connect, $query)) {
		http_response_code(204);
	} else {
		http_response_code(401);
	}

	mysqli_close($connect);
?>