<?php
session_start();

$token = bin2hex(openssl_random_pseudo_bytes(16));

$_SESSION['token'] = $token;
?>
<form action="./receive.php" method="post">
	<input type="hidden" name="token" value="<?= $token ?>">
    <input type="text" name="text">
    <input type="submit" value="実行">
</form>
