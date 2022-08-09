<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('index');
Route::post('/thread_store', [App\Http\Controllers\HomeController::class, 'thread_store'])->name('thread_store')->middleware('auth');
Route::get('/thread/{thread}', [App\Http\Controllers\HomeController::class, 'thread'])->name('thread');
Route::post('/reply_store', [App\Http\Controllers\HomeController::class, 'reply_store'])->name('reply_store')->middleware('auth');;

Route::group(['middleware' => ['auth', 'can:admin']], function() {
	Route::get('/admin/index', [App\Http\Controllers\AdminController::class, 'index'])->name('admin.index');
	Route::post('/admin/thread_delete', [App\Http\Controllers\AdminController::class, 'thread_delete'])->name('admin.thread_delete');
	Route::post('/admin/reply_delete', [App\Http\Controllers\AdminController::class, 'reply_delete'])->name('admin.reply_delete');	
});
