<?php

use Illuminate\Support\Facades\Route;

// Master
// Route::get('masteradmin/data/karyawan',['as'=>'masteradmin/data/karyawan','uses'=> 'MasterController@datakaryawan']);
Route::get('masteradmin/data/karyawan','MasterController@datakaryawan');
Route::get('masteradmin/data/jadwalkaryawan','MasterController@jadwalkaryawan');
Route::post('masteradmin/data/jadwal/simpan','MasterController@simpanjadwalpriode');
Route::get('masteradmin/data/jadwal/{id_periode}',['as'=>'masteradmin/data/jadwal','uses'=> 'MasterController@jadwalperiode']);
Route::get('masteradmin/data/jadwal/cetak/{id_periode}',['as'=>'masteradmin/data/jadwal/cetak','uses'=> 'MasterController@cetakjadwalperiode']);
Route::get('masteradmin/data/jadwal/upload/{id_periode}',['as'=>'masteradmin/data/jadwal/upload','uses'=> 'MasterController@uploadjadwalperiode']);

Route::get('masteradmin/data/cetakabsensi','MasterController@cetakabsensi');
Route::get('/find/nama', 'MasterController@find')->name('find');


Route::get('masteradmin/data/karyawan/detail/{id_user}',['as'=>'masteradmin/data/karyawan/detail','uses'=> 'MasterController@detaildatakaryawan']);
Route::get('master/karyawan/absesni/{id}',['as'=>'master/karyawan/absesni','uses'=> 'MasterController@detaildataabsensikaryawan']);
Route::get('master/karyawan/jadwal/{id}',['as'=>'master/karyawan/jadwal','uses'=> 'MasterController@jadwaldataabsensikaryawan']);
Route::get('master/karyawan/calender/{id}',['as'=>'master/karyawan/calender','uses'=> 'MasterController@calenderdetaildataabsensikaryawan']);


Route::post('masteradmin/data/karyawan/posttambah','MasterController@posttambahuser');
Route::get('/uploadabsensi', 'MasterController@uploadabsensi');
Route::post('/import_excel', 'MasterController@import_excel');
// Deskripsi
Route::get('pramita/user/datadiri',['as'=>'pramita/user/datadiri','uses'=> 'UserController@datadiri']);
Route::get('pramita/user/pendidikan',['as'=>'pramita/user/pendidikan','uses'=> 'UserController@pendidikan']);
Route::get('pramita/user/vaksin',['as'=>'pramita/user/vaksin','uses'=> 'UserController@vaksin']);
Route::get('pramita/user/sertifikasi',['as'=>'pramita/user/sertifikasi','uses'=> 'UserController@sertifikasi']);


Route::post('pramita/post/datadiri','UserController@postdatadiri');
Route::post('pramita/post/pendidikan','UserController@postpendidikan');
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

Route::get('/calender', function () {
    $date = date('Y-m-d');
    // dd($date);
    return view('masteradmin.menu.calender',['date'=>$date]);
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('chat/view/{id_user}',['as'=>'chat/view/','uses'=> 'UserController@chattinguser']);