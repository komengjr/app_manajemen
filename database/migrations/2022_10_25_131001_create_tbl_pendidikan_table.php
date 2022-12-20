<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblPendidikanTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_pendidikan', function (Blueprint $table) {
            $table->id();
            $table->string('id_user')->index();
            $table->string('nama_sekolah');
            $table->string('mulai_sekolah');
            $table->string('selesai_sekolah');
            $table->string('no_ijazah');
            $table->string('jurusan')->nullable();
            $table->string('nilai')->nullable();
            $table->text('file')->nullable();
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
        Schema::dropIfExists('tbl_pendidikan');
    }
}
