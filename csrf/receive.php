<?php
session_start();

if ( !isset($_SESSION['token']) || !isset($_POST['token']) || $_SESSION['token'] != $_POST['token'] ) {
	header('HTTP', true, 403);
	exit();
}

error_log($_POST['text'] . "\n", 3, 'data.txt');
$data = file_get_contents('data.txt');

echo $data;
