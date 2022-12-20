<?php

namespace App\Imports;

use App\Absensi;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
class AbsensiImport implements ToModel 
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Absensi([
            'id_finger' => $row[0],
            'nama' => $row[1], 
            'status' => $row[2],
            'lokasi_id' => $row[3],
            'no_pin' => $row[4], 
            'kd_verifikasi' => $row[5],
            'departemen' => $row[6],
            'tgl_waktu' => $row[7], 
            
        ]);
    }
}
