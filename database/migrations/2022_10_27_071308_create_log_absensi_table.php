<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLogAbsensiTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('log_absensi', function (Blueprint $table) {
            $table->id('id_log_absensi');
            $table->string('id_finger')->index();
            $table->string('nama');
            $table->string('status');
            $table->string('lokasi_id');
            $table->string('no_pin')->nullable();
            $table->string('kd_verifikasi')->nullable();
            $table->string('departemen')->nullable();
            $table->string('tgl/waktu');
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
        Schema::dropIfExists('log_absensi');
    }
}
