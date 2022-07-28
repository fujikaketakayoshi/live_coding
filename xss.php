<form action="./xss.php" method="get">
    <input type="text" name="text" size="80">
    <input type="submit" value="実行">
</form>

<p><?= htmlspecialchars($_GET['text']) ?></p>