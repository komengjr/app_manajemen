<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Absensi extends Model
{
    protected $table = "log_absensi";
 
    protected $fillable = ['id_finger','nama','status','lokasi_id','no_pin','kd_verifikasi','departemen','tgl_waktu'];
}
