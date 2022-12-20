<script src="{{ url('assets/js/pace.min.js', []) }}"></script>
<div class="card border-top border-0 border-4 border-white">
    <div class="card-body p-5">
        <div class="card-title d-flex align-items-center">
            <div><i class="fa fa-user-md me-4 font-22 text-white"></i>
            </div>
            <h5 class="mb-0 text-white">Data Vkasin</h5>
        </div>
        <hr>
        <form class="row g-3">
            <div class="col-md-12">
                <label for="inputLastName1" class="form-label">Nama Vaksin</label>
                <div class="input-group"> <span class="input-group-text"><i class='bx bxs-home'></i></span>
                    <input type="text" class="form-control border-start-0" id="inputLastName1" placeholder="Nama Sekolah" />
                </div>
            </div>
            <div class="col-md-6">
                <label for="inputLastName2" class="form-label">Vaksin Ke</label>
                <div class="input-group"> <span class="input-group-text"><i class='lni lni-postcard'></i></span>
                    <input type="text" class="form-control border-start-0" id="inputLastName2" placeholder="Tahun Mulai" />
                </div>
            </div>
            <div class="col-md-6">
                <label for="inputPhoneNo" class="form-label">Tanggal Vaksin</label>
                <div class="input-group"> <span class="input-group-text"><i class='bx bxs-user' ></i></span>
                    <input type="text" class="form-control border-start-0" id="inputPhoneNo" placeholder="Tahun Selesai" />
                </div>
            </div>
            <div class="col-md-6">
                <label for="inputLastName2" class="form-label">Upload file</label>
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
                <div class="card radius-10 bg-info border-top border-0 border-4 border-white">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div>
                                <p class="mb-0 text-dark"></p>
                                <h5 class="my-1 text-dark">Vaksin Pifizer ( 1 )</h5>
                                <p class="mb-0 font-13 text-dark">
                                    <table class="text-dark p-2" style="font-size: 9px;">
                                        <tr>
                                            <td>Tanggal Vaksin Vaksin</td>
                                            <td class="px-3"> : </td>
                                            <td> 27 / 08 / 2021</td>
                                        </tr>
                                       
                                    </table>
                                      
                                </p>
                               
                            </div>
                           
                        </div>
                        <button type="button" class="btn-dark px-2 btn-sm " style="float: right;"><i class="fa fa-eye"></i></button>
                        <button type="button" class="btn-primary px-2 btn-sm mx-2" style="float: right;"><i class="fa fa-pencil"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>