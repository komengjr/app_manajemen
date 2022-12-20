<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblJadwalKaryawanTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_jadwal_karyawan', function (Blueprint $table) {
            $table->id('id_jadwal');
            $table->string('kd_jadwal')->unique();
            $table->string('kd_priode')->index();
            $table->string('id_user')->index();
            $table->string('tgl_jam_masuk');
            $table->string('tgl_jam_keluar');
            $table->string('status')->nullable();
            // $table->string('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tbl_jadwal_karyawan');
    }
}
