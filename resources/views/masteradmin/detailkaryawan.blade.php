
<script src="{{ url('assets/js/pace.min.js', []) }}"></script>
<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
    <div class="breadcrumb-title pe-3">Data Karyawan</div>
    <div class="ps-3">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-0 p-0">
                <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">{{ $datauser[0]->name }}</li>
            </ol>
        </nav>
    </div>
    <div class="ms-auto">
        <div class="btn-group">
            <a href="{{ url('masteradmin/data/karyawan', []) }}" class="btn btn-light" ><i class="lni lni-angle-double-left"></i> Back</a>
            
        </div>
    </div>
</div>
<!--end breadcrumb-->

<div class="card">
    <div class="row g-0">
        <div class="col-md-4 border-end p-5">
            <img src="{{ url($datauser[0]->gambar, []) }}" class="img-fluid" alt="...">
           
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h4 class="card-title">{{ $datauser[0]->name }}</h4>
                <div class="d-flex gap-3 py-3">
                    <div class="cursor-pointer">
                        <i class='bx bxs-star text-warning'></i>
                        <i class='bx bxs-star text-warning'></i>
                        <i class='bx bxs-star text-warning'></i>
                        <i class='bx bxs-star text-warning'></i>
                        <i class='bx bxs-star'></i>
                    </div>
                    {{-- <div>142 reviews</div> --}}
                    <div class="text-white"><i class='bx bxs-records align-middle'></i> {{$record}} Record</div>
                </div>
                {{-- <div class="mb-3">
                    <span class="price h4">$149.00</span>
                    <span class="">/per kg</span>
                </div> --}}
                <p class="card-text fs-6">-</p>
                <dl class="row">
                    <dt class="col-sm-3">Nama Lengkap</dt>
                    <dd class="col-sm-9">{{ $datauser[0]->name }}</dd>

                    <dt class="col-sm-3">Alamat Email</dt>
                    <dd class="col-sm-9">{{ $datauser[0]->_email }}</dd>

                    <dt class="col-sm-3">Divisi</dt>
                    <dd class="col-sm-9">{{ $datauser[0]->div }}</dd>
                    <dt class="col-sm-3">Akses</dt>
                    <dd class="col-sm-9">{{ $datauser[0]->akses }}</dd>
                    <dt class="col-sm-3">ID FInger</dt>
                    <dd class="col-sm-9">{{ $datauser[0]->id_finger }}</dd>
                </dl>
                {{-- <hr>
                <div class="row row-cols-auto row-cols-1 row-cols-md-3 align-items-center">
                    <div class="col">
                        <label class="form-label">Quantity</label>
                        <div class="input-group input-spinner">
                            <button class="btn btn-light" type="button" id="button-plus"> + </button>
                            <input type="text" class="form-control" value="1">
                            <button class="btn btn-light" type="button" id="button-minus"> − </button>
                        </div>
                    </div>
                    <div class="col">
                        <label class="form-label">Select size</label>
                        <div class="">
                            <label class="form-check form-check-inline">
                                <input type="radio"class="form-check-input" name="select_size" checked=""
                                    class="custom-control-input">
                                <div class="form-check-label">Small</div>
                            </label>
                            <label class="form-check form-check-inline">
                                <input type="radio"class="form-check-input" name="select_size" checked=""
                                    class="custom-control-input">
                                <div class="form-check-label">Medium</div>
                            </label>

                            <label class="form-check form-check-inline">
                                <input type="radio"class="form-check-input" name="select_size" checked=""
                                    class="custom-control-input">
                                <div class="form-check-label">Large</div>
                            </label>
                        </div>
                    </div>
                    <div class="col">
                        <label class="form-label">Select Color</label>
                        <div class="color-indigators d-flex align-items-center gap-2">
                            <div class="color-indigator-item bg-primary"></div>
                            <div class="color-indigator-item bg-danger"></div>
                            <div class="color-indigator-item bg-success"></div>
                            <div class="color-indigator-item bg-warning"></div>
                        </div>
                    </div>
                </div>
                <div class="d-flex gap-3 mt-3">
                    <a href="#" class="btn btn-white">Buy Now</a>
                    <a href="#" class="btn btn-light"><span class="text">Add to cart</span> <i
                            class='bx bxs-cart-alt'></i></a>
                </div> --}}
            </div>
        </div>
    </div>
    <hr />
    <div class="card-body">
        <ul class="nav nav-tabs mb-0" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link active" data-bs-toggle="tab" href="#primaryhome" role="tab"
                    aria-selected="true">
                    <div class="d-flex align-items-center">
                        <div class="tab-icon"><i class='bx bx-user font-18 me-1'></i>
                        </div>
                        <div class="tab-title">Data  Diri </div>
                    </div>
                </a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" data-bs-toggle="tab" href="#primaryprofile" role="tab"
                    aria-selected="false">
                    <div class="d-flex align-items-center">
                        <div class="tab-icon"><i class='fa fa-graduation-cap font-18 me-1'></i>
                        </div>
                        <div class="tab-title">Pendidikan</div>
                    </div>
                </a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" data-bs-toggle="tab" href="#primarycontact" role="tab"
                    aria-selected="false">
                    <div class="d-flex align-items-center">
                        <div class="tab-icon"><i class='bx bx-star font-18 me-1'></i>
                        </div>
                        <div class="tab-title">Kompetensi & Sertifikasi</div>
                    </div>
                </a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" data-bs-toggle="tab" href="#vaksin" role="tab"
                    aria-selected="false">
                    <div class="d-flex align-items-center">
                        <div class="tab-icon"><i class='lni lni-syringe font-18 me-1'></i>
                        </div>
                        <div class="tab-title">Vaksin</div>
                    </div>
                </a>
            </li>
        </ul>
        <div class="tab-content pt-3">
            <div class="tab-pane fade show active" id="primaryhome" role="tabpanel">
                <p>null</p>
            </div>
            <div class="tab-pane fade" id="primaryprofile" role="tabpanel">
                <p>Null</p>
            </div>
            <div class="tab-pane fade" id="primarycontact" role="tabpanel">
                <p>null.</p>
            </div>
            <div class="tab-pane fade" id="vaksin" role="tabpanel">
                <p>null.</p>
            </div>
        </div>
    </div>

</div>


<h6 class="text-uppercase mb-0">Menu Karyawan</h6>

<hr />
<div class="row row-cols-1 row-cols-lg-3">
    <div class="col">
        <div class="card radius-10 bg-info">
        <div class="card-body">
            <div class="d-flex align-items-center">
            <div>
                <p class="mb-0 text-dark">Data Record Absesni</p>
                <h4 class="my-1 text-dark">{{$record}} Records</h4>
                {{-- <p class="mb-0 font-13 text-dark"><i class="bx bxs-up-arrow align-middle"></i> 10 %</p> --}}
            </div>
            <div class="widgets-icons bg-white text-dark ms-auto" data-bs-toggle="modal" data-bs-target="#exampleFullScreenModal" style="cursor: pointer;" id="buttondetailabsensikaryawan" data-url="{{ url('master/karyawan/absesni', ['id'=>$datauser[0]->id_user]) }}"><i class="bx bxs-group"></i>
            </div>
            </div>
        </div>
        </div>
    </div>
    <div class="col">
      <div class="card radius-10 bg-success bg-gradient">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div>
              <p class="mb-0 text-dark">Map View Absensi</p>
              <h4 class="my-1 text-dark">8.4K</h4>
              {{-- <p class="mb-0 font-13 text-dark"><i class="bx bxs-up-arrow align-middle"></i>$24 from last week</p> --}}
            </div>
            <div class="widgets-icons bg-white text-dark ms-auto" ><a href="{{ url('master/karyawan/calender', ['id'=>$datauser[0]->id_user]) }}" target="_blank" rel="noopener noreferrer"><i class="bx bxs-group"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card radius-10 bg-success bg-gradient">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div>
              <p class="mb-0 text-dark">Jadwal Karyawan</p>
              <h4 class="my-1 text-dark">-</h4>
              {{-- <p class="mb-0 font-13 text-dark"><i class="bx bxs-up-arrow align-middle"></i>$24 from last week</p> --}}
            </div>
            <div class="widgets-icons bg-white text-dark ms-auto" data-bs-toggle="modal" data-bs-target="#exampleFullScreenModal" style="cursor: pointer;" id="buttonjadwalabsensikaryawan" data-url="{{ url('master/karyawan/jadwal', ['id'=>$datauser[0]->id_user]) }}"><i class="bx bxs-group"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    
</div>
<div class="modal fade" id="exampleFullScreenModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Data Absensi - {{$datauser[0]->name}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
				<div id="masterbodydatakaryawan">

        </div>
				
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        {{-- <button type="button" class="btn btn-primary">Save changes</button> --}}
      </div>
    </div>
  </div>
</div>

<script src="{{ url('assets/js/app.js', []) }}"></script>