@extends('layouts.base')
@section('content')
<script src="{{ url('assets/js/pace.min.js', []) }}"></script>
<div class="page-wrapper">
    <div class="page-content" id="showdatabody">
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div class="breadcrumb-title pe-3">Master Data</div>
            <div class="ps-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-user-circle"></i></a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Data Karyawan</li>
                    </ol>
                </nav>
            </div>
            <div class="ms-auto">
                <div class="btn-group">
                    <button type="button" class="btn btn-light"><i class="lni lni-cog"></i> Pengaturan Data</button>
                    <button type="button" class="btn btn-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">	<span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">	
                        <a class="dropdown-item" href="javascript:;" data-bs-toggle="modal" data-bs-target="#mastertambahuser"><i class="lni lni-user"></i> Tambah User</a>
                        <a class="dropdown-item" href="javascript:;"><i class="bx bx-grid-alt"></i> Mode Table</a>
                        <a class="dropdown-item" href="javascript:;"><i class="bx bx-grid-alt"></i> Mode View</a>
                        <div class="dropdown-divider"></div>	<a class="dropdown-item" href="javascript:;">Separated link</a>
                    </div>
                </div>
            </div>
        </div>
        <!--end breadcrumb-->
        {{-- <h6 class="mb-0 text-uppercase">Laboratorium Klinik Pramita Pontianak</h6> --}}
        <hr/>
        <div class="row">
            <div class="col-md-8">
                <div class="text-center" style="text-align: center;">{!! $datax->onEachSide(0)->links() !!}</div>
            </div>
            <div class="col-md-4">
                <div class="position-relative search-bar-box pb-2" style="float: right;">
                    <form action="{{ url('find/nama/', []) }}">
                        <input type="text" class="form-control search-control"  name="cari" placeholder="Type to search..."> <span class="position-absolute top-50 search-show translate-middle-y"><i class='bx bx-search'></i></span>
                        <span class="position-absolute top-50 search-close translate-middle-y"><i class='bx bx-x'></i></span>
                    </form>
                </div>
            </div>
        </div>
        <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-4">
            @if(!empty($datax) && $datax->count())
                @foreach ($datax as $item)
                    
                    <div class="col">
                        <div class="card radius-15">
                            <div class="card-body text-center">
                                <div class="p-4 border radius-15">
                                    <img src="{{ url($item->gambar, []) }}" width="110" height="110" class="rounded-circle shadow" alt="">
                                    <h6 class="mb-0 mt-5">{{$item->name}}</h6>
                                    <p class="mb-3">{{$item->email}}</p>
                                    <div class="list-inline contacts-social mt-3 mb-3"> 
                                        <a href="javascript:;" class="list-inline-item bg-light text-white border-0"><i class="bx bxl-facebook"></i></a>
                                        <a href="javascript:;" class="list-inline-item bg-light text-white border-0"><i class="bx bxl-twitter"></i></a>
                                        <a href="javascript:;" class="list-inline-item bg-light text-white border-0"><i class="bx bxl-google"></i></a>
                                        <a href="javascript:;" class="list-inline-item bg-light text-white border-0"><i class="bx bxl-linkedin"></i></a>
                                    </div>
                                    <div class="d-grid">
                                        <div class="row">
                                            <div class="col-8"><a href="#" class="btn btn-light radius-15" id="buttondetailkaryawan" data-url="{{ url('masteradmin/data/karyawan/detail', ['id_user'=>$item->id_user]) }}"><i class="fa fa-eye"></i> Detail</a></div> 
                                            <div class="col-2"><button type="button" class="btn btn-outline-danger radius-15"><i class="lni lni-trash"></i></button></div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                @endforeach
            @else
                <tr>
                    <td colspan="10">There are no data.</td>
                </tr>
            @endif
        </div>
        <!--end row-->
        {!! $datax->onEachSide(0)->links() !!}
        <div class="modal fade" id="mastertambahuser" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title"><i class="lni lni-user"></i> Tambah Data User</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="card-body p-0">
                            
                            <form class="row g-3" method="POST" action="{{ url('masteradmin/data/karyawan/posttambah', []) }}" enctype="multipart/form-data">
                                @csrf
                                <div class="col-12">
                                    <label for="inputPhoneNo" class="form-label">Nama Lengkap</label>
                                    <div class="input-group"> <span class="input-group-text"><i class='bx bxs-user' ></i></span>
                                        <input type="text" class="form-control border-start-0" name="name" placeholder="Nama Lengkap" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputLastName1" class="form-label">Username</label>
                                    <div class="input-group"> <span class="input-group-text"><i class='bx bxs-user'></i></span>
                                        <input type="text" class="form-control border-start-0" name="email" placeholder="Isikan Username" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputLastName2" class="form-label">Password</label>
                                    <div class="input-group"> <span class="input-group-text"><i class='bx bxs-key'></i></span>
                                        <input type="password" class="form-control border-start-0" name="password" placeholder="Isikan Password" />
                                    </div>
                                </div>
                                
                                <div class="col-12">
                                    <label for="inputEmailAddress" class="form-label">Email Address</label>
                                    <div class="input-group"> <span class="input-group-text"><i class='bx bxs-envelope' ></i></span>
                                        <input type="email" class="form-control border-start-0" name="_email" placeholder="Email Address" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputLastName1" class="form-label">Divisi</label>
                                    <div class="input-group"> <span class="input-group-text"><i class='bx bxs-user-circle'></i></span>
                                        <select class="single-select" name="divisi">
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputLastName2" class="form-label">Akses</label>
                                    <div class="input-group"> <span class="input-group-text"><i class='bx bxs-lock'></i></span>
                                        <select class="multiple-select" name="akses">
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress3" class="form-label">Upload Gambar</label>
                                    <div class="input-group"> <span class="input-group-text"><i class='bx bxs-envelope' ></i></span>
                                        <input type="file" class="form-control border-start-0" name="gambar" id="gambar" placeholder="Email Address" />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck2">
                                        <label class="form-check-label" for="gridCheck2">Check me out</label>
                                    </div>
                                </div>
                                
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-outline-success"><i class="lni lni-save"></i> Simpan Data</button>
                                </div>
                                </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</div>
<script src="{{ url('assets/plugins/select2/js/select2.min.js', []) }}"></script>
<script>
    $('.single-select').select2({
        theme: 'bootstrap4',
        width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
        placeholder: $(this).data('placeholder'),
        allowClear: Boolean($(this).data('allow-clear')),
    });
    $('.multiple-select').select2({
        theme: 'bootstrap4',
        width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
        placeholder: $(this).data('placeholder'),
        allowClear: Boolean($(this).data('allow-clear')),
    });
</script>
@endsection