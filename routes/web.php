<?php

// change language routes
Route::get('/lang/{lang?}', 'LangController@set_language');

//Application
Route::view('/{params?}', 'app')->where('params', '.*');