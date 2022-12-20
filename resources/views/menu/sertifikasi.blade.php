<script src="{{ url('assets/js/pace.min.js', []) }}"></script>
<div class="card border-top border-0 border-4 border-white">
    <div class="card-body p-5">
        <div class="card-title d-flex align-items-center">
            <div><i class="lni lni-archive me-4 font-22 text-white"></i>
            </div>
            <h5 class="mb-0 text-white">Data Sertifikasi</h5>
        </div>
        <hr>
        <form class="row g-3">
            <div class="col-md-12">
                <label for="inputLastName1" class="form-label">Nama Sertifikat</label>
                <div class="input-group"> <span class="input-group-text"><i class='bx bxs-home'></i></span>
                    <input type="text" class="form-control border-start-0" id="inputLastName1" placeholder="Nama Sekolah" />
                </div>
            </div>
            <div class="col-md-6">
                <label for="inputLastName2" class="form-label">Nomor Sertifikat</label>
                <div class="input-group"> <span class="input-group-text"><i class='lni lni-postcard'></i></span>
                    <input type="text" class="form-control border-start-0" id="inputLastName2" placeholder="Tahun Mulai" />
                </div>
            </div>
            <div class="col-md-6">
                <label for="inputPhoneNo" class="form-label">Tanggal buat</label>
                <div class="input-group"> <span class="input-group-text"><i class='bx bxs-user' ></i></span>
                    <input type="text" class="form-control border-start-0" id="inputPhoneNo" placeholder="Tahun Selesai" />
                </div>
            </div>
            <div class="col-md-6">
                <label for="inputLastName2" class="form-label">Upload Sertifikat</label>
                <div class="input-group"> <span class="input-group-text"><i class='lni lni-postcard'></i></span>
                    <input type="file" class="form-control border-start-0" id="inputLastName2" placeholder="Jurusan" />
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
            <div class="col">
                <div class="card radius-10 bg-gradient bg-warning border-top border-0 border-4 border-white">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div style="text-align: justify;">
                                <p class="mb-0 text-dark"></p>
                                <h5 class="my-1 text-dark">Baypas Data Source Ke Database</h5>
                                <p class="mb-0 font-13 text-dark">
                                    <table class="text-dark p-2" style="font-size: 9px;">
                                        <tr>
                                            <td>Nomor Sertifikat</td>
                                            <td class="px-3"> : </td>
                                            <td> SDM/XX/29-0239</td>
                                        </tr>
                                        <tr>
                                            <td>Tanggal Terbit</td>
                                            <td class="px-3"> : </td>
                                            <td> 28 / 12 / 1992</td>
                                        </tr>
                                       
                                    </table>
                                      
                                </p>
                                <button type="button" class="btn-dark px-2 btn-sm " style="float: right;"><i class="fa fa-eye"></i></button>
                                <button type="button" class="btn-primary px-2 btn-sm mx-2" style="float: right;"><i class="fa fa-pencil"></i></button>
                            </div>
                            {{-- <div class="widgets-icons bg-white text-dark ms-auto"><i class="bx bxs-group" style="cursor: pointer;"></i>
                            </div> --}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>