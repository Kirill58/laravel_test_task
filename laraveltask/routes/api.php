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

Route::post('/album', [
    'uses' => 'AlbumController@onAdd'
]);

Route::get('/albums', [
   'uses' => 'AlbumController@onDisplay'
]);

Route::put('/album/{id}', [
    'uses' => 'AlbumController@onUpdate'
]);

Route::delete('/album/{id}', [
    'uses' => 'AlbumController@onDelete'
]);

Route::post('/track', [
    'uses' => 'TrackController@onAdd'
]);

Route::get('/tracks', [
   'uses' => 'TrackController@onDisplay'
]);

Route::put('/track/{id}', [
    'uses' => 'TrackController@onUpdate'
]);

Route::delete('/track/{id}', [
    'uses' => 'TrackController@onDelete'
]);
