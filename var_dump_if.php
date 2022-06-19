<?php

$str = 'test';
$abc = 'abc';
$num = 123;
$arr = [];


var_dump( strpos($abc, 'a') !== false && $str == 'test' && is_numeric($num));

if ( strpos($abc, 'a') !== false && $str == 'test' && is_numeric($num)) {
    echo 'OK';
} else {
    echo 'NG';
}

echo '<br>';


$a = 0;

if (is_numeric($num)) {
    $a = 100;
} else {
    $a = 50;
}

var_dump($a);

$b = is_numeric($num) ? 100 : 50;
var_dump($b);
