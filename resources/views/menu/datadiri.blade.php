{{-- <link href="{{ url('assets/css/loader.css', []) }}" rel="stylesheet" /> --}}
<script src="{{ url('assets/js/pace.min.js', []) }}"></script>
<div class="card border-top border-0 border-4 border-white">
    <div class="card-body p-5">
        <div class="card-title d-flex align-items-center">
            <div><i class="bx bxs-user me-4 font-22 text-white"></i>
            </div>
            <h5 class="mb-0 text-white">Data Pribadi</h5>
        </div>
        <hr>
        @if ($datadiri->isEmpty())
             
            <form class="row g-3" method="POST" action="{{ url('pramita/post/datadiri', []) }}">
                @csrf
                <div class="col-md-12">
                    <label for="inputLastName1" class="form-label">Nama Lengkap * <span style="color: red">Lengkapi</span></label>
                    <div class="input-group"> <span class="input-group-text"><i class='bx bxs-user'></i></span>
                        <input type="text" class="form-control border-start-0" name="nama_lengkap" placeholder="Nama Lengkap" required>
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="inputLastName2" class="form-label">No Kartu Tanda Penduduk ( KTP )</label>
                    <div class="input-group"> <span class="input-group-text"><i class='lni lni-postcard'></i></span>
                        <input type="text" class="form-control border-start-0" name="ktp" placeholder="Kartu Tanda Penduduk" required/>
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="inputPhoneNo" class="form-label">Nama Panggilan</label>
                    <div class="input-group"> <span class="input-group-text"><i class='bx bxs-user'></i></span>
                        <input type="text" class="form-control border-start-0" name="nama_panggilan" placeholder="Nama Panggilan" required/>
                    </div>
                </div>
                <div class="col-12">
                    <label for="inputEmailAddress" class="form-label">Email * Valid</label>
                    <div class="input-group"> <span class="input-group-text"><i class='bx bxs-message' ></i></span>
                        <input type="text" class="form-control border-start-0" name="email" placeholder="Email Address">
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="inputLastName2" class="form-label">Jenis Kelamin</label>
                    <div class="input-group"> <span class="input-group-text"><i class='fa fa-venus-mars'></i></span>
                        <select name="jenis_kelamin" class="form-control" id="" required>
                            <option value="">Pilih Jenis Kelamin</option>
                            <option value="L">Laki - Laki</option>
                            <option value="P">Perempuan</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="inputPhoneNo" class="form-label">Kewarganegaraan</label>
                    <div class="input-group"> <span class="input-group-text"><i class='lni lni-world' ></i></span>
                        <input type="text" class="form-control border-start-0" name="kewarganegaraan" placeholder="KewarganegaraanS" />
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="inputPhoneNo" class="form-label">Agama</label>
                    <div class="input-group"> <span class="input-group-text"><i class='lni lni-consulting' ></i></span>
                        <select name="agama" class="form-control" id="" required>
                            <option value="">Pilih Agama</option>
                            <option value="Islam">Islam</option>
                            <option value="Keristen">Keristen</option>
                            <option value="Budha">Budha</option>
                            <option value="Hindu">Hindu</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="inputPhoneNo" class="form-label">Status Pernikahan</label>
                    <div class="input-group"> <span class="input-group-text"><i class='lni lni-network' ></i></span>
                        <select name="status_pernikahan" class="form-control" id="" required>
                            <option value="">Pilih Status </option>
                            <option value="Belum Menikah">Belum Menikah</option>
                            <option value="Menikah">Menikah</option>
                            <option value="Cerai Mati">Cerai Mati</option>
                            <option value="Cerai Hidup">Cerai Hidup</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="inputPhoneNo" class="form-label">Tempat Lahir</label>
                    <div class="input-group"> <span class="input-group-text"><i class='bx bxs-home' ></i></span>
                        <input type="text" class="form-control border-start-0" name="tempat_lahir" placeholder="Tempat Lahir" required/>
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="inputPhoneNo" class="form-label">Tanggal Lahir</label>
                    <div class="input-group"> <span class="input-group-text"><i class='bx bxs-time' ></i></span>
                        <input type="date" class="form-control border-start-0" name="tgl_lahir" placeholder="Tanggal Lahir" />
                    </div>
                </div>
                
                <div class="col-12">
                    <label for="inputAddress3" class="form-label">Alamat Rumah</label>
                    <textarea class="form-control" name="alamat" placeholder="Enter Address" rows="3"></textarea>
                </div>
                <div class="col-12">
                    <label for="inputAddress3" class="form-label">Deskripsi Diri</label>
                    <textarea class="form-control" name="deskripsi_diri" placeholder="Enter Address" rows="3"></textarea>
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck2" required>
                        <label class="form-check-label" for="gridCheck2"> Yakin Jika Setuju</label>
                    </div>
                </div>
                <div class="col-12">
                    <button type="submit" class=" btn-light  btn-sm" style="float: right;"><i class="fa fa-save"></i> Simpan Data</button>
                </div>
            </form>

        @else

            <form class="row g-3">
                <div class="col-md-12">
                    <label for="inputLastName1" class="form-label">Nama Lengkap </label>
                    <div class="input-group"> <span class="input-group-text"><i class='bx bxs-user'></i></span>
                        <input type="text" class="form-control border-start-0" id="inputLastName1" value="{{$datadiri[0]->nama_lengkap}}" disabled/>
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="inputLastName2" class="form-label">No Kartu Tanda Penduduk ( KTP )</label>
                    <div class="input-group"> <span class="input-group-text"><i class='lni lni-postcard'></i></span>
                        <input type="text" class="form-control border-start-0" id="inputLastName2" value="{{$datadiri[0]->ktp}}" disabled />
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="inputPhoneNo" class="form-label">Nama Panggilan</label>
                    <div class="input-group"> <span class="input-group-text"><i class='bx bxs-user' ></i></span>
                        <input type="text" class="form-control border-start-0" id="inputPhoneNo" value="{{$datadiri[0]->nama_panggilan}}" disabled/>
                    </div>
                </div>
                <div class="col-12">
                    <label for="inputEmailAddress" class="form-label">Email * Valid</label>
                    <div class="input-group"> <span class="input-group-text"><i class='bx bxs-message' ></i></span>
                        <input type="text" class="form-control border-start-0" id="inputEmailAddress" value="{{$datadiri[0]->email}}" disabled />
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="inputLastName2" class="form-label">Jenis Kelamin</label>
                    <div class="input-group"> <span class="input-group-text"><i class='fa fa-venus-mars'></i></span>
                        <select name="" class="form-control" id=""  disabled>
                            @if ($datadiri[0]->jenis_kelamin == 'L')
                            <option value="L">Laki - Laki</option>
                            @else 
                            <option value="P">Perempuan</option>
                            @endif
                            
                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="inputPhoneNo" class="form-label">Kewarganegaraan</label>
                    <div class="input-group"> <span class="input-group-text"><i class='lni lni-world' ></i></span>
                        <input type="text" class="form-control border-start-0" id="inputPhoneNo" value="{{$datadiri[0]->kewarganegaraan}}" disabled  />
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="inputPhoneNo" class="form-label">Agama</label>
                    <div class="input-group"> <span class="input-group-text"><i class='lni lni-consulting' ></i></span>
                        <input type="text" class="form-control border-start-0" id="inputPhoneNo" value="{{$datadiri[0]->agama}}" disabled  />
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="inputPhoneNo" class="form-label">Status Pernikahan</label>
                    <div class="input-group"> <span class="input-group-text"><i class='lni lni-network' ></i></span>
                        <input type="text" class="form-control border-start-0" id="inputPhoneNo" value="{{$datadiri[0]->status_pernikahan}}" disabled  />
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="inputPhoneNo" class="form-label">Tempat Lahir</label>
                    <div class="input-group"> <span class="input-group-text"><i class='bx bxs-home' ></i></span>
                        <input type="text" class="form-control border-start-0" id="inputPhoneNo" value="{{$datadiri[0]->tempat_lahir}}" disabled />
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="inputPhoneNo" class="form-label">Tanggal Lahir</label>
                    <div class="input-group"> <span class="input-group-text"><i class='bx bxs-time' ></i></span>
                        <input type="date" class="form-control border-start-0" id="inputPhoneNo" value="{{$datadiri[0]->tgl_lahir}}" disabled />
                    </div>
                </div>
                
                <div class="col-12">
                    <label for="inputAddress3" class="form-label">Alamat Rumah</label>
                    <textarea class="form-control" id="inputAddress3" placeholder="Enter Address" rows="3" disabled>{{$datadiri[0]->alamat}}</textarea>
                </div>
                <div class="col-12">
                    <label for="inputAddress3" class="form-label">Deskripsi Diri</label>
                    <textarea class="form-control" id="inputAddress3" placeholder="Enter Address" rows="3" disabled>{{$datadiri[0]->deskripsi_diri}}</textarea>
                </div>
                {{-- <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck2">
                        <label class="form-check-label" for="gridCheck2">Check me out</label>
                    </div>
                </div> --}}
                {{-- <div class="col-12">
                    <button type="submit" class="btn btn-light px-5" style="float: right;"><i class="fa fa-save"></i> Update Data</button>
                </div> --}}
            </form>

        @endif
    </div>
</div>