<?php
	include_once '../config/connect.php';

	$query = "SELECT * FROM image, users WHERE users.id_image = image.id";
	
	$sql = mysqli_query($connect, $query);
	
	$temp = [];
	
	while($row = mysqli_fetch_assoc($sql)) {
		$temp[] = $row;
	}
	if ($sql) {
		http_response_code(200);
		echo json_encode($temp);
	} else {
		http_response_code(301);
	}
?>