<?php
namespace Test;

class Test {
	
	public $foo = 'default';
	public $bar = '';
	
	public function __construct($foo = null) {
		if ( $foo ) {
			$this->foo = $foo;
		}
		return $this;
	}
	
	public function fooConcat($str) {
		$this->foo = $this->foo . $str;
	}
	
	public function setBar($var) {
		$this->bar = $var;
	}
	
	public function setConvertAssoc($assoc) {
		foreach ( $assoc as $k => $v ) {
			$this->$k = $v;
		}
	}
	
}


