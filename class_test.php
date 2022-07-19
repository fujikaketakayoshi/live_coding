<?php

require_once('./Test/Test.php');

use Test\Test;

$t = new Test();

$t->fooConcat('test');

var_dump($t->foo);

$t->setBar('setbaaaar');

var_dump($t->bar);

$t->setConvertAssoc(['abc' => 123, 'def' => 456]);

var_dump($t);

echo '<br>';


$dt = new DateTime('2000-1-1');

//$dt->setTimestamp(0);
// $dt->modify('+1 years');
// $dt->modify('+20 months');
// $dt->modify('+2000 days');
$dt->modify('last day of -4 month');

echo $dt->format('Y-m-d H:i:s');
//var_dump($dt->getTimezone()->getName());

// var_dump(get_class_methods($dt));
