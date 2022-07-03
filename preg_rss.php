<?php
 ini_set('max_execution_time', 1200);

$options = [
    'http' => [
        'method' => 'GET',
        'header' => 'User-Agent: iOS',
    ],
];
$context = stream_context_create($options);
$html = file_get_contents('https://mtmx.jp/feeds', false, $context);

preg_match_all("|https://feeds.mtmx.jp/sites/\d+/feed.xml|", $html, $arr);

$summary_arr = [];
foreach ($arr[0] as $feed_url) {
    $data = simplexml_load_string(file_get_contents($feed_url));
    $assoc = json_decode(json_encode($data), true);
//     var_dump($assoc['channel']['item']);
//     exit;
    $summary_arr = array_merge($summary_arr, $assoc['channel']['item']);
}
?>
<html>
<head>
    	<meta charset="UTF-8">
    	<title>ニュースRSS</title>
</head>
<body>
<ul>
<?php foreach ( $summary_arr as $s ) { ?>
    <li><a href="<?= $s['link'] ?>"><?= htmlspecialchars($s['title']) ?></a>&nbsp;<?= date('Y-m-d H:i:s', strtotime($s['pubDate'])) ?><li>
<?php } ?>
</ul>
</body>
</html>