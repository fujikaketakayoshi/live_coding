<?php
session_start();

$token = bin2hex(openssl_random_pseudo_bytes(16));
$_SESSION['token'] = $token;
?>
<html>
<head>
    	<meta charset="UTF-8">
    	<title>問い合わせフォーム</title>
</head>
<body>
<form action="exec.php" method="POST">
	<input type="hidden" name="token" value="<?= $token ?>">
	<p>全部必須項目です</p>
	<div>
		<labal for="email">メールアドレス</label>
		<input id="email" type="email" name="email" value="<?= $_SESSION['old']['email'] ?? '' ?>" required>
		<?php if (isset($_SESSION['error']['email'])) { ?>
		<p><?= $_SESSION['error']['email'] ?></p>
		<?php } ?>
	</div>
	<div>
		<labal for="body">お問い合わせ</label>
		<textarea id="body" name="body" required><?= $_SESSION['old']['body'] ?? '' ?></textarea>
		<?php if (isset($_SESSION['error']['body'])) { ?>
		<p><?= $_SESSION['error']['body'] ?></p>
		<?php } ?>
	</div>
	<input type="submit" value="送信">
</form>
</body>
</html>
<?php
unset($_SESSION['error']);