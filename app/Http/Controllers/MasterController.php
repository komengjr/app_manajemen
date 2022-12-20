<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Imports\AbsensiImport;
use App\Absensi;
use Session;
use App\tbl_users;
use Maatwebsite\Excel\Facades\Excel;
class MasterController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function datakaryawan()
    {
        if (auth::user()->akses == 1) {
            // $datauser = DB::table('users')->get();
            $datax = tbl_users::where('akses',"A")->paginate(8);
            return view('masteradmin.datakaryawan',compact('datax'));
        }
    }
    public function find(Request $request)
    {
        $cari = $request->cari;
        
        // mengambil data dari table guru sesuai pencarian data
        $datax = DB::table('users')
        ->where('name','like',"%".$cari."%")
        ->paginate(8);
        
        // mengirim data pegawai ke view index
        return view('masteradmin.datakaryawan',compact('datax'));
    }
    public function detaildatakaryawan($id_user)
    {
        if (auth::user()->akses == 1) {
            $datauser = DB::table('users')->where('id_user',$id_user)->get();
            $record = DB::table('log_absensi')->where('id_finger',$datauser[0]->id_finger)->count();
            return view('masteradmin.detailkaryawan',['datauser'=>$datauser,'record'=>$record]);
        }
    }
    public function posttambahuser(Request $request)
    {
        if (auth::user()->akses == 1) {
            $filename = round(microtime(true) * 1000).'-'.str_replace(' ','-',$request->file('gambar')->getClientOriginalName());
            $request->file('gambar')->move(public_path('data_upload/pas_foto'), $filename);
            $random = Str::random(4);
            DB::table('users')->insert(
                [
                    'id_user' => 'user-'.$random,
                    'email' => $request->input('email'),
                    'name' => $request->input('name'),
                    '_email' => $request->input('_email'),
                    'div' => $request->input('divisi'),
                    'akses' => $request->input('akses'),
                    'gambar' => 'data_upload/pas_foto/'.$filename,
                    'password' => Hash::make($request->input('password')),
                    'created_at' => date('Y-m-d H:i:s'),
                ]
            );
            return redirect()->back()->with(['success' => 'Data User Berhasil di Tambah ']);
        }
    }
    public function detaildataabsensikaryawan($id)
    {
        $data_log = DB::table('log_absensi')
        ->join('users','users.id_finger','=','log_absensi.id_finger')
        ->where('id_user',$id)
        ->get();
        return view('masteradmin.menu.dataabsensi',['data_log'=>$data_log]);
    }
    public function jadwaldataabsensikaryawan($id)
    {
        $data_jadwal= DB::table('tbl_jadwal_karyawan')
        ->where('id_user',$id)
        ->get();
        return view('masteradmin.menu.jadwal_karyawan',['data_jadwal'=>$data_jadwal]);
    }
    public function calenderdetaildataabsensikaryawan($id)
    {
        $data_log = DB::table('log_absensi')
        ->join('users','users.id_finger','=','log_absensi.id_finger')
        ->where('id_user',$id)
        ->get();
        $date = date('Y-m-d');
        return view('masteradmin.menu.calender_detail',['data_log'=>$data_log,'date'=>$date]);
    }
    public function uploadabsensi()
    {
        $data = DB::table('log_absensi')
        ->where('created_at','LIKE', '%'.date('Y-m-d').'%')
        ->get();
        // dd($data);
        return view('masteradmin.uploaddataabsensi',['data'=>$data]);
    }
    public function import_excel(Request $request)
    {
        $this->validate($request, [
			'file' => 'required|mimes:csv,xls,xlsx'
		]);
 
		// menangkap file excel
		$file = $request->file('file');
 
		// membuat nama file unik
		$nama_file = rand().$file->getClientOriginalName();
 
		// upload ke folder file_siswa di dalam folder public
		$file->move('data_excel',$nama_file);
 
		// import data
		Excel::import(new AbsensiImport, public_path('/data_excel/'.$nama_file));
 
		$count = DB::table('log_absensi')
        ->where('created_at','LIKE', '%'.date('Y-m-d').'%')
        ->count();
		return redirect()->back()->with(['success' => 'Data Log Absensi Berhasil di Tambah berjumlah :  '.$count]);
    }

    public function jadwalkaryawan()
    {
        if (auth::user()->akses == 1) {
            $data = DB::table('tbl_jadwal_priode')->get();
            return view('masteradmin.jadwalkaryawan',['data'=>$data]);
        }
    }
    public function cetakabsensi()
    {
        if (auth::user()->akses == 1) {
            return view('masteradmin.cetakabsensi');
        }
    }
    public function simpanjadwalpriode(Request $request)
    {
        if (auth::user()->akses == 1) {
            $random = Str::random(4);
            DB::table('tbl_jadwal_priode')->insert(
                [
                    'kd_priode' => 'priode-'.$random,
                    'nama_priode' => $request->input('periode'),
                    'tgl_awal' => $request->input('tgl_awal'),
                    'tgl_akhir' => $request->input('tgl_akhir'),
                    'status' => 0,
                    'keterangan' => $request->input('keterangan'),
                    'created_at' => date('Y-m-d H:i:s'),
                ]
            );
            return redirect()->back()->with(['success' => 'Data Priode Jadwal Berhasil di Tambah']);
        }
    }

    public function jadwalperiode()
    {
        if (auth::user()->akses == 1) {
            $data = DB::table('users')->where('akses','A')->get();
            return view('masteradmin.menu.lihatjadwalperiode',['data'=>$data]);
        }
    }
    public function cetakjadwalperiode()
    {
        if (auth::user()->akses == 1) {
            return view('masteradmin.menu.cetakdatajadwalkaryawan');
        }
    }
    public function uploadjadwalperiode()
    {
        if (auth::user()->akses == 1) {
            return view('masteradmin.menu.uploaddataperiode');
        }
    }
}
