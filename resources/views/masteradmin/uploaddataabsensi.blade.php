@extends('layouts.base')
@section('content')
    <!--end header -->
    <!--start page wrapper -->
    <div class="page-wrapper">
        <div class="page-content" id="showdatabody">


            <!--breadcrumb-->
            <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                <div class="breadcrumb-title pe-5 px-3">Upload Presensi</div>
                <div class="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0 p-0">
                            <li class="breadcrumb-item"><a href="javascript:;"><i class="fa fa-user-circle"></i></a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">{{ auth::user()->name }}</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <!--end breadcrumb-->
            <div class="container">
                @if ($message = Session::get('success'))
                    <div
                        class="alert border-0 border-start border-5 border-white alert-dismissible fade show py-2 bg-success bg-gradient">
                        <div class="d-flex align-items-center">
                            <div class="font-35 text-white"><i class='bx bxs-check-circle'></i>
                            </div>
                            <div class="ms-3">
                                <h6 class="mb-0 text-white">Success Alerts</h6>
                                <div>{{ $message }} </div>
                            </div>
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                @else
                    <div class="row mt-3">
                        <div class="col-12 col-lg-12">
                            <form method="post" action="{{ url('import_excel', []) }}" enctype="multipart/form-data">
                                <div class="modal-content">
                                    <div class="modal-body">

                                        {{ csrf_field() }}

                                        <label>Pilih file excel</label>
                                        <div class="form-group">
                                            <input type="file" name="file" required="required" class="form-control">
                                        </div>

                                    </div>
                                    <div class="modal-footer">
                                        {{-- <div class="email-sidebar-header d-grid"> <a href="javascript:;" class="btn btn-light compose-mail-btn"><i class='bx bx-plus me-2'></i> Compose</a> --}}
                                        <button type="submit" class="btn btn-light"><i class="fa fa-upload"></i> Upload Data</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                @endif
                <div class="row mt-2">

                    <div class="col-12 col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="table-responsive mt-2">
                                    <table class="table table-striped table-hover table-sm mb-0" id="example"
                                        style="width:100%">
                                        <thead>
                                            <tr>
                                                <th class="p-2">No</th>
                                                <th>ID Finger</th>
                                                <th>Name</th>
                                                <th>status</th>
                                                <th>No PIN</th>
                                                <th>Kode Verifikasi</th>
                                                <th>Tgl & Waktu</th>

                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @php
                                                $no = 1;
                                            @endphp
                                            @foreach ($data as $data)
                                                <tr>
                                                    <td class="p-2">{{ $no++ }}</td>
                                                    <td>{{ $data->id_finger }}</td>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div><i class='bx bxs-user me-2 font-24'></i>
                                                            </div>
                                                            <div class="font-weight-bold">{{ $data->nama }}</div>
                                                        </div>
                                                    </td>
                                                    <td>{{ $data->status }}</td>
                                                    <td>{{ $data->no_pin }}</td>
                                                    <td>{{ $data->kd_verifikasi }}</td>
                                                    <td>{{ Str::substr($data->tgl_waktu,0,2)}}-{{ Str::substr($data->tgl_waktu,3,2)}}-{{ Str::substr($data->tgl_waktu,6,4)}} , {{ Str::substr($data->tgl_waktu,11,5)}}</td>

                                                    <td><i class='bx bx-dots-horizontal-rounded font-24'></i>
                                                    </td>
                                                </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Import Excel -->

            </div>
        </div>
    </div>
    
    
@endsection
