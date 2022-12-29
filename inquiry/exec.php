<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require('./PHPMailer/src/PHPMailer.php');
require('./PHPMailer/src/Exception.php');
require('./PHPMailer/src/SMTP.php');

session_start();
if ( !isset($_SESSION['token']) || !isset($_POST['token']) || $_SESSION['token'] != $_POST['token'] ) {
	header('HTTP', true, 403);
	exit();
}

// バリデーションチェック
if ( !preg_match("/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/", $_POST['email']) ) {
 	$_SESSION['error']['email'] = 'メールアドレスが不正です';
 }
 if ($_POST['email'] == '') {
 	$_SESSION['error']['email'] = 'メールアドレスは必須です';
}
 if ($_POST['body'] == '') {
 	$_SESSION['error']['body'] = 'お問い合わせは必須です';
}
if ( isset($_SESSION['error'])) {
	$_SESSION['old']['email'] = $_POST['email'];
	$_SESSION['old']['body'] = $_POST['body'];
	header('Location: http://localhost/live_coding/inquiry/form.php');
}


$mail = new PHPMailer(true);

// 文字エンコードを指定
$mail->CharSet = 'utf-8';

try {
  // デバッグ設定
  // $mail->SMTPDebug = 2; // デバッグ出力を有効化（レベルを指定）
  // $mail->Debugoutput = function($str, $level) {echo "debug level $level; message: $str<br>";};

  // SMTPサーバの設定
  $mail->isSMTP();                          // SMTPの使用宣言
  $mail->Host       = 'smtp.gmail.com';   // SMTPサーバーを指定
  $mail->SMTPAuth   = true;                 // SMTP authenticationを有効化
  $mail->Username   = '';   // SMTPサーバーのユーザ名
  $mail->Password   = '';           // SMTPサーバーのパスワード
  $mail->SMTPSecure = 'tls';  // 暗号化を有効（tls or ssl）無効の場合はfalse
  $mail->Port       = 587; // TCPポートを指定（tlsの場合は465や587）

  // 送受信先設定（第二引数は省略可）
  $mail->setFrom($_POST['email']); // 送信者
  $mail->addAddress('fujikake.takayoshi@gmail.com');   // 宛先
  $mail->addReplyTo($_POST['email']); // 返信先
//  $mail->addCC('cc@example.com', '受信者名'); // CC宛先
//  $mail->Sender = 'return@example.com'; // Return-path

  // 送信内容設定
  $mail->Subject = 'お問い合わせ';
  $mail->Body    = $_POST['email'] . " さんからの問い合わせです。\n" . $_POST['body'];

  // 送信
  $mail->send();
} catch (Exception $e) {
  // エラーの場合
  echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
<html>
<head>
	<meta charset="UTF-8">
	<title>送信しました</title>
</head>
<body>
	<p>送信しました</p>
</body>
</html>