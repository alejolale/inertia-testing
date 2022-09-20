<?php

use App\Http\Controllers\HomeController;
use App\Models\User;
use Illuminate\Support\Facades\Request;
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

Route::get('/', [HomeController::class, 'index']);
Route::get('/demo', [HomeController::class, 'demo']);
Route::get("/create", [HomeController::class, 'createUser']);
Route::post('/users', function() {
    $values = Request::validate([
        'name' => 'required',
        'email' => ['required', 'email'],
        'password' => 'required',
    ]);

    User::create($values);

    //redirect
    return redirect(('/demo'));
});

Route::inertia('/test', 'test');

Route::post('/logout', function (){
    dd(request('foo'));
});
