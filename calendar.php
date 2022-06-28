<?php
if ( isset($_GET['ym']) ) {
    $time = strtotime($_GET['ym']);
} else {
    $time = time();
}

$ym_jp = date('Y年n月', $time);
$first_day = date('j', strtotime(date('Ymd', $time) . "first day of this month"));
$last_day = date('j', strtotime(date('Ymd', $time) . "last day of this month"));
$first_day_w = date('w', strtotime(date('Ymd', $time) . "first day of this month"));
$last_day_w = date('w', strtotime(date('Ymd', $time) . "last day of this month"));
$days = range($first_day, $last_day);

$first_null_days = [];
for ( $i = 0; $i < $first_day_w; $i++ ) {
    $first_null_days[] = NULL;
}
$days = array_merge($first_null_days, $days);

$last_null_days = [];
for ( $i = 6; $i > $last_day_w; $i-- ) {
    $last_null_days[] = NULL;
}
$days = array_merge($days, $last_null_days);

$year = date('Y', $time);
$holidays = json_decode(@file_get_contents('https://holidays-jp.github.io/api/v1/' . $year . '/date.json'), true);
?>
<html>
<head>
    	<meta charset="UTF-8">
    	<title><?= $ym_jp ?></title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

</head>
<body>
<h1><a href="?ym=<?= date('Y-m', strtotime(date('Ymd', $time) . "-1 month")) ?>">&lt;</a><?= $ym_jp ?><a href="?ym=<?= date('Y-m', strtotime(date('Ymd', $time) . "+1 month")) ?>">&gt;</a></h1>
    <table class="table table-bordered">
        <thead>
            <td class="alert-danger">日</td><td>月</td><td>火</td><td>水</td><td>木</td><td>金</td><td class="alert-primary">土</td>
        </thead>
        <?php for ( $i = 0; $i < count($days) / 7 ; $i++ ) { ?>
        <tr>
            <?php for ( $j = 0; $j < 7; $j++ ) { ?>
            <td<?php if ( isset($holidays[date('Y-m-', $time) . $days[$j + $i * 7]]) ) { echo ' class="alert-danger"'; } elseif (date('j', $time) == $days[$j + $i * 7]) { echo ' class="alert-warning"'; } elseif ( $j == 0 ) { echo ' class="alert-danger"'; } elseif ($j == 6) { echo ' class="alert-primary"'; } ?>><?= $days[$j + $i * 7] ?><?php if ( isset($holidays[date('Y-m-d', strtotime(date('Y-m-', $time) . $days[$j + $i * 7]))])) { echo "<br>" . $holidays[date('Y-m-d', strtotime(date('Y-m-', $time) . $days[$j + $i * 7]))]; } ?></td>
            <?php } ?>
        </tr>
        <?php } ?>
    </table>
</body>
</html>