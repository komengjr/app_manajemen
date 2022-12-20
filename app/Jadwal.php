<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Jadwal extends Model
{
    protected $table = "tbl_jadwal_karyawan";
 
    protected $fillable = ['kd_jadwal','kd_priode','id_user','tgl_jam_masuk','tgl_jam_keluar','status'];
}
