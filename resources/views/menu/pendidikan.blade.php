<script src="{{ url('assets/js/pace.min.js', []) }}"></script>
<div class="card border-top border-0 border-4 border-white">
    <div class="card-body p-5">
        <div class="card-title d-flex align-items-center">
            <div><i class="fa fa-graduation-cap me-4 font-22 text-white"></i>
            </div>
            <h5 class="mb-0 text-white">Data Pendidikan</h5>
        </div>
        <hr>
        <form class="row g-3" method="POST" action="{{ url('pramita/post/pendidikan', []) }}">
            @csrf
            <div class="col-md-12">
                <label for="inputLastName1" class="form-label">Nama Sekolah</label>
                <div class="input-group"> <span class="input-group-text"><i class='bx bxs-home'></i></span>
                    <input type="text" class="form-control border-start-0" name="nama_sekolah" placeholder="Nama Sekolah" />
                </div>
            </div>
            <div class="col-md-6">
                <label for="inputLastName2" class="form-label">Tahun Mulai</label>
                <div class="input-group"> <span class="input-group-text"><i class='lni lni-postcard'></i></span>
                    <input type="text" class="form-control border-start-0" name="mulai_sekolah" placeholder="Tahun Mulai" />
                </div>
            </div>
            <div class="col-md-6">
                <label for="inputPhoneNo" class="form-label">Tahun Selesai</label>
                <div class="input-group"> <span class="input-group-text"><i class='bx bxs-user' ></i></span>
                    <input type="text" class="form-control border-start-0" name="selesai_sekolah" placeholder="Tahun Selesai" />
                </div>
            </div>
            <div class="col-md-6">
                <label for="inputLastName2" class="form-label">Jurusan</label>
                <div class="input-group"> <span class="input-group-text"><i class='lni lni-postcard'></i></span>
                    <input type="text" class="form-control border-start-0" name="jurusan" placeholder="Jurusan" />
                </div>
            </div>
            <div class="col-md-6">
                <label for="inputPhoneNo" class="form-label">IPK / Nilai</label>
                <div class="input-group"> <span class="input-group-text"><i class='bx bxs-user' ></i></span>
                    <input type="text" class="form-control border-start-0" name="nilai" placeholder="IPK / Nilai" />
                </div>
            </div>
            <div class="col-md-6">
                <label for="inputPhoneNo" class="form-label">NO Ijazah</label>
                <div class="input-group"> <span class="input-group-text"><i class='bx bxs-user' ></i></span>
                    <input type="text" class="form-control border-start-0" name="no_ijazah" placeholder="No Ijazah" />
                </div>
            </div>
            <div class="col-md-6">
                <label for="inputPhoneNo" class="form-label">File Upload</label>
                <div class="input-group"> <span class="input-group-text"><i class='bx bxs-user' ></i></span>
                    <input type="file" class="form-control border-start-0" name="gambar" placeholder="file upload" />
                </div>
            </div>

            <div class="col-12">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck2">
                    <label class="form-check-label" for="gridCheck2">Check me out</label>
                </div>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-outline-light px-2" style="float: right;"><i class="fa fa-save"></i> Tambah Data</button>
            </div>
        </form>
        <hr>
        <div class="row row-cols-1 row-cols-md-2 row-cols-xl-12">
            @foreach ($datapendidikan as $item)
            
            <div class="col">
                <div class="card radius-10 bg-gradient bg-info border-top border-0 border-4 border-white">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div style="text-align: justify;">
                                <p class="mb-0 text-dark"></p>
                                <h5 class="my-1 text-dark">{{$item->nama_sekolah}} ( {{$item->mulai_sekolah }} - {{ $item->selesai_sekolah}} )</h5>
                                <p class="mb-0 font-13 text-dark">
                                    <table class="text-dark p-1" style="font-size: 10px;">
                                        <tr>
                                            <td>Jurusan</td>
                                            <td class="px-4"> : </td>
                                            <td> {{$item->jurusan}}</td>
                                        </tr>
                                        <tr>
                                            <td>IPK / Nilai</td>
                                            <td class="px-4"> : </td>
                                            <td> {{$item->nilai}}</td>
                                        </tr>
                                        <tr>
                                            <td>Nomor Ijazah</td>
                                            <td class="px-4"> : </td>
                                            <td> {{$item->no_ijazah}}</td>
                                        </tr>
                                    </table>
                                      
                                </p>
                                <button type="button" class="btn-dark px-2 btn-sm " style="float: right;"><i class="fa fa-eye"></i></button>
                                <button type="button" class="btn-primary px-2 btn-sm mx-2" style="float: right;"><i class="fa fa-pencil"></i></button>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
                
            @endforeach
        </div>
    </div>
</div>