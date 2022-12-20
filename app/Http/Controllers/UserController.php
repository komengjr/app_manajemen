<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function datadiri()
    {
        $datadiri = DB::table('tbl_datadiri')->where('id_user',auth::user()->id_user)->get();
        return view('menu.datadiri',['datadiri'=>$datadiri]);
    }
    public function pendidikan()
    {
        $datapendidikan = DB::table('tbl_pendidikan')->where('id_user',auth::user()->id_user)->get();
        return view('menu.pendidikan',['datapendidikan'=>$datapendidikan]);
    }
    public function vaksin()
    {
        return view('menu.vaksin');
    }
    public function sertifikasi()
    {
        return view('menu.sertifikasi');
    }

    // POST

    public function postdatadiri(Request $request)
    {
        DB::table('tbl_datadiri')->insert(
            [
                'id_user' => auth::user()->id_user,
                'email' => auth::user()->email,
                'ktp' => $request->input('ktp'),
                'nama_lengkap' => $request->input('nama_lengkap'),
                'nama_panggilan' => $request->input('nama_panggilan'),
                'jenis_kelamin' => $request->input('jenis_kelamin'),
                'kewarganegaraan' => $request->input('kewarganegaraan'),
                'agama' => $request->input('agama'),
                'status_pernikahan' => $request->input('status_pernikahan'),
                'tempat_lahir' => $request->input('tempat_lahir'),
                'tgl_lahir' => $request->input('tgl_lahir'),
                'alamat' => $request->input('alamat'),
                'deskripsi_diri' => $request->input('deskripsi_diri'),

                'created_at' => date('Y-m-d H:i:s'),
            ]
        );
        return redirect()->back()->with(['success' => 'Data Diri Berhasil di Simpan ']);
    }
    public function postpendidikan(Request $request)
    {
        DB::table('tbl_pendidikan')->insert(
            [
                'id_user' => auth::user()->id_user,
                'nama_sekolah' => $request->input('nama_sekolah'),
                'mulai_sekolah' => $request->input('mulai_sekolah'),
                'selesai_sekolah' => $request->input('selesai_sekolah'),
                'no_ijazah' => $request->input('no_ijazah'),
                'jurusan' => $request->input('jurusan'),
                'nilai' => $request->input('nilai'),
        
                'created_at' => date('Y-m-d H:i:s'),
            ]
        );
        return redirect()->back()->with(['success' => 'Data Pendidikan Berhasil di Simpan ']);
    }
    public function chattinguser($id_user)
    {
        return view('chat.view');
    }
}
