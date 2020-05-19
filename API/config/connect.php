<?php
	header("Access-Control-Allow-Origin: *");

    header("Access-Control-Allow-Methods: *");

    header("Content-Type: application/json");
	header("Content-Type: application/json; charset=UTF-8");

	$connect = mysqli_connect("localhost", "root", "", "manage_users");
	if ($connect) {
		return $connect;
	} else {
		echo "Connect error !";
	}
?>