<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/getSentences', function () {
    $langs = ['en','ar'];
    in_array(request()->lang, $langs) ? \App::setLocale(request()->lang) : \App::setLocale('en');
    return response()->json(__('allSentenses'), 200);
});

Route::post('/login', 'AuthController@login');
Route::post('/logout', 'AuthController@logout');
Route::post('/me', 'AuthController@me');
