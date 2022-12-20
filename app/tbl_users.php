<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class tbl_users extends Model
{
    protected $table = 'users';
    protected $fillable = [
        'id_user','id_finger','name', 'email', '_email','email_verified_at','div','akses', 'gambar', 'created_at',
    ];
}
