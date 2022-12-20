@extends('layouts.base')
@section('content')
        
        <!--end header -->
        <!--start page wrapper -->
        <div class="page-wrapper">
            <div class="page-content" id="showdatabody">

                
                <!--breadcrumb-->
                <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div class="breadcrumb-title pe-5 px-3">Data Profile</div>
                    <div class="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb mb-0 p-0">
                                <li class="breadcrumb-item"><a href="javascript:;"><i class="fa fa-user-circle"></i></a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">{{auth::user()->name}}</li>
                            </ol>
                        </nav>
                    </div> 
                </div>
                <!--end breadcrumb-->
                <div class="container">
                    @if ($message = Session::get('success'))
                    <div class="alert border-0 border-start border-5 border-white alert-dismissible fade show py-2 bg-success bg-gradient">
                        <div class="d-flex align-items-center">
                            <div class="font-35 text-white"><i class='bx bxs-check-circle'></i>
                            </div>
                            <div class="ms-3">
                                <h6 class="mb-0 text-white">Success Alerts</h6>
                                <div>{{ $message }}</div>
                            </div>
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    @endif
                    <div class="main-body">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="card border-top border-0 border-4 border-white">
                                    <div class="card-body">
                                        <div class="d-flex flex-column align-items-center text-center">
                                            <img src="{{ url(auth::user()->gambar, []) }}" alt="Admin"
                                                class="rounded-2 p-1 bg-info" width="110">
                                            <div class="mt-3">
                                                <h4>{{auth::user()->name}}</h4>
                                                <p class="mb-1">Full Stack Developer</p>
                                                <p class="font-size-sm">Korea Selatan, Perdamaian, CA</p>
                                                @php
                                                    $cekdataditri = DB::table('tbl_datadiri')->where('id_user',Auth::user()->id_user)->count();
                                                    $cekpendidikan = DB::table('tbl_pendidikan')->where('id_user',Auth::user()->id_user)->count();
                                                @endphp

                                                @if ($cekpendidikan == 0)
                                                    <button class="btn btn-light mb-2 border-danger border-3" id="buttonformpendidikan" data-url="{{ url('pramita/user/pendidikan', []) }}"><i class="fa fa-graduation-cap"></i> Pendidikan</button>
                                                @else
                                                    <button class="btn btn-light mb-2 border-success border-3" id="buttonformpendidikan" data-url="{{ url('pramita/user/pendidikan', []) }}"><i class="fa fa-graduation-cap"></i> Pendidikan</button>   
                                                @endif
                                                
                                                
                                                @if ($cekdataditri == 0)
                                                    <button class="btn btn-light mb-2 border-danger border-3" id="buttonformdatadiri" data-url="{{ url('pramita/user/datadiri', []) }}"><i class="fa fa-user"></i> Data diri</button>
                                                @else
                                                    <button class="btn btn-light mb-2 border-success border-3" id="buttonformdatadiri" data-url="{{ url('pramita/user/datadiri', []) }}"><i class="fa fa-user"></i> Data diri</button>
                                                @endif                                             
                                                
                                                {{-- <button class="btn btn-light mb-2" ><i class="fa fa-star"></i> Kompetensi</button> --}}
                                                <button class="btn btn-light mb-2 border-danger border-3" id="buttonformsertifikasi" data-url="{{ url('pramita/user/sertifikasi', []) }}"><i class="fa fa-certificate"></i> Kompetensi & Sertifikasi</button>
                                                <button class="btn btn-light mb-2 border-danger border-3" id="buttonformvaksin" data-url="{{ url('pramita/user/vaksin', []) }}"><i class="lni lni-syringe"></i> Vaksin</button>
                                            </div>
                                        </div>
                                        <hr class="my-4" />
                                        <ul class="list-group list-group-flush">
                                           
                                            <li
                                                class="list-group-item d-flex justify-content-between align-items-center flex-wrap mb-2">
                                                <h6 class="mb-0"><i class="lni lni-twitter"></i> Twitter</h6>
                                                <span class="text-white">@agus_raharjo</span>
                                            </li>
                                            <li
                                                class="list-group-item d-flex justify-content-between align-items-center flex-wrap mb-2">
                                                <h6 class="mb-0"><i class="lni lni-instagram"></i> Instagram</h6>
                                                <span class="text-white">agus_raharjo</span>
                                            </li>
                                            <li
                                                class="list-group-item d-flex justify-content-between align-items-center flex-wrap mb-2">
                                                <h6 class="mb-0"><i class="lni lni-facebook"></i> Facebook</h6>
                                                <span class="text-white">agus_raharjo</span>
                                            </li>
                                            <li
                                                class="list-group-item d-flex justify-content-between align-items-center flex-wrap mb-2">
                                                <h6 class="mb-0"><i class="lni lni-telegram"></i> Telegram</h6>
                                                <span class="text-white">agus_raharjo</span>
                                            </li>
                                            <li
                                                class="list-group-item d-flex justify-content-between align-items-center flex-wrap mb-2">
                                                <h6 class="mb-0"><i class="lni lni-whatsapp"></i> Whatsapp</h6>
                                                <span class="text-white">agus_raharjo</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8" id="showdatapribadi">
                                <div class="card border-top border-0 border-4 border-white">
                                    <div class="card-body">
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Nama Lengkap</h6>
                                            </div>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" value="{{auth::user()->name}}" />
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Email</h6>
                                            </div>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control"
                                                    value="{{auth::user()->email}}" />
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">No Handphone</h6>
                                            </div>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" value="(239) 816-9029" />
                                            </div>
                                        </div>
                                       
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Alamat</h6>
                                            </div>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control"
                                                    value="Bay Area, San Francisco, CA" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class=" align-items-center mb-3"><i class="lni lni-network"></i> Status Kinerja </h5>
                                                <p><i class="lni lni-library"></i> Absensi</p>
                                                <div class="progress mb-3" style="height: 5px">
                                                    <div class="progress-bar" role="progressbar" style="width: 80%"
                                                        aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                                    </div>
                                                </div>
                                                <p><i class="fa fa-briefcase"></i> Pelatihan</p>
                                                <div class="progress mb-3" style="height: 5px">
                                                    <div class="progress-bar" role="progressbar" style="width: 72%"
                                                        aria-valuenow="72" aria-valuemin="0" aria-valuemax="100">
                                                    </div>
                                                </div>
                                                <p><i class="fa fa-briefcase"></i> Kinerja 3</p>
                                                <div class="progress mb-3" style="height: 5px">
                                                    <div class="progress-bar" role="progressbar" style="width: 89%"
                                                        aria-valuenow="89" aria-valuemin="0" aria-valuemax="100">
                                                    </div>
                                                </div>
                                                <p>Kinerja 4</p>
                                                <div class="progress mb-3" style="height: 5px">
                                                    <div class="progress-bar" role="progressbar" style="width: 55%"
                                                        aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                                                    </div>
                                                </div>
                                                <p>Kinerja 5</p>
                                                <div class="progress" style="height: 5px">
                                                    <div class="progress-bar" role="progressbar" style="width: 66%"
                                                        aria-valuenow="66" aria-valuemin="0" aria-valuemax="100">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
@endsection