<?php

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
use App\Exports\PqrsExport;
use Maatwebsite\Excel\Facades\Excel;

Route::get('/', function () {
    return view('welcome');
});
Auth::routes();
Route::resource('api','PqrController');
Route::resource('problems','Problem_listController');
Route::resource('neighbors','NeighborsController');
Route::resource('infrastructures','InfrastructureController');
Route::get('neighbors_list','NeighborsController@getNames');
Route::get('get_excel', function () {
    return Excel::download(new PqrsExport, 'products.xlsx');
});