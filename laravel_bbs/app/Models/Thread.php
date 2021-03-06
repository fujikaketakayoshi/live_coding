<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Thread extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'user_id',
        'title',
        'body',
    ];
	
	public function user() {
		return $this->belongsTo('App\Models\User');
	}
	
	public function replies() {
		return $this->hasMany('App\Models\Reply');
	}
	
}
