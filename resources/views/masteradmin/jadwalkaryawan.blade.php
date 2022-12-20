@extends('layouts.base')
@section('content')
    <link href="{{ url('assets/plugins/datetimepicker/css/classic.css', []) }}" rel="stylesheet" />
	<link href="{{ url('assets/plugins/datetimepicker/css/classic.time.css', []) }}" rel="stylesheet" />
	<link href="{{ url('assets/plugins/datetimepicker/css/classic.date.css', []) }}" rel="stylesheet" />
    <div class="page-wrapper">
        <div class="page-content">

            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-xl-6">
                                    <a href="#" class="btn btn-light mb-3 mb-lg-0" data-bs-toggle="modal" data-bs-target="#tambahbulanjadwal"><i class='bx bxs-plus-square'></i> Jadwal Periode Baru</a>
                                </div>
                                <div class="col-lg-6 col-xl-6">
                                    <form class="float-lg-end">
                                        <div class="row row-cols-lg-auto g-2">
                                            <div class="col-12">
                                                <div class="position-relative">
                                                    <input type="text" class="form-control ps-5"
                                                        placeholder="Search Product..."> <span
                                                        class="position-absolute top-50 product-show translate-middle-y"><i
                                                            class="bx bx-search"></i></span>
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 product-grid">
                @foreach ($data as $data)
                
                <div class="col">
                    <div class="card">
                        <img src="{{ url('assets/images/products/01.png', []) }}" class="card-img-top" alt="...">
                        <div class="">
                            <div class="position-absolute top-0 end-0 m-3 product-discount">
                                {{-- <span class="">100%</span> --}}
                            </div>
                        </div>
                        <div class="card-body">
                            <h6 class="card-title cursor-pointer">{{$data->nama_priode}}</h6>
                            <div class="clearfix">
                                <p class="mb-0 float-start"><strong>24</strong> User</p>
                                <p class="mb-0 float-end fw-bold">
                                    {{-- <span class="me-2 text-decoration-line-through">7288</span> --}}
                                    <span class="text-white">0 data</span></p>
                            </div>
                            <div class="d-flex align-items-center mt-3 fs-6">
                                <div class="cursor-pointer" >
                                   <p style="font-size: 12px;">Periode : {{$data->tgl_awal}} - {{$data->tgl_akhir}}</p>
                                </div>
                                <p class="mb-0 ms-auto"></p>
                            </div>
                            <div class="d-flex align-items-center mt-3 fs-6">
                                <div class="cursor-pointer" >
                                   <button class="btn-info" data-bs-toggle="modal" data-bs-target="#lihatdatajadwal" id="buttonlihatjadwalperiode" data-url="{{ url('masteradmin/data/jadwal', ['id_periode'=>2]) }}"><i class="fa fa-eye"></i></button>
                                   <button class="btn-primary" data-bs-toggle="modal" data-bs-target="#lihatdatajadwal" id="buttoncetakjadwalperiode" data-url="{{ url('masteradmin/data/jadwal/cetak', ['id_periode'=>2]) }}"><i class="fa fa-print"></i></button>
                                   <button class="btn-warning" data-bs-toggle="modal" data-bs-target="#lihatdatajadwalx" id="buttonuploadjadwalperiode" data-url="{{ url('masteradmin/data/jadwal/upload', ['id_periode'=>2]) }}"><i class="fa fa-upload"></i></button>
                                </div>
                                <p class="mb-0 ms-auto">
                                    <button class="btn-danger"><i class="fa fa-trash"></i></button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                  
                @endforeach
            </div>
            <!--end row-->


        </div>
    </div>

    <div class="modal fade" id="tambahbulanjadwal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Tambah Data Jadwal Bulanan</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="row g-3" action="{{ url('masteradmin/data/jadwal/simpan', []) }}" method="post">
                        @csrf
                        <div class="col-12">
                            <label for="inputLastName1" class="form-label">Periode Bulan</label>
                            <div class="input-group"> <span class="input-group-text"><i class='bx bxs-user'></i></span>
                                <input type="text" class="form-control border-start-0" name="periode" placeholder="Example : Oktober 2022"  required/>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="inputLastName2" class="form-label">Tanggal Awal</label>
                            <div class="input-group"> <span class="input-group-text"><i class='bx bxs-user'></i></span>
                                <input type="date" class="form-control border-start-0" name="tgl_awal" placeholder="tanggal awal" required/>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="inputLastName2" class="form-label">Tanggal Akhir</label>
                            <div class="input-group"> <span class="input-group-text"><i class='bx bxs-user'></i></span>
                                <input type="date" class="form-control border-start-0" name="tgl_akhir" placeholder="tanggal akhir" required/>
                            </div>
                        </div>
                       
                       
                        <div class="col-12">
                            <label for="inputAddress3" class="form-label">Keterangan</label>
                            <textarea class="form-control" id="inputAddress3" placeholder="Boleh Kosong" name="keterangan" rows="3"></textarea>
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck2">
                                <label class="form-check-label" for="gridCheck2">Check me out</label>
                            </div>
                        </div>
                       
                    
                </div>
                <div class="modal-footer">
                    {{-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> --}}
                    <button type="submit" class="btn-primary"><i class="fa fa-save"></i> Simapn Jadwal</button>
                </div>
            </form>
            </div>
        </div>
    </div>

    <div class="modal fade" id="lihatdatajadwal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content" id="showdatajadwalperiode">

                
            
            </div>
        </div>
    </div>
    <div class="modal fade" id="lihatdatajadwalx" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content" id="showdatajadwalperiodesmall">

                
            
            </div>
        </div>
    </div>

    <script src="{{ url('assets/plugins/datetimepicker/js/picker.js', []) }}"></script>
	<script src="{{ url('assets/plugins/datetimepicker/js/picker.time.js', []) }}"></script>
	<script src="{{ url('assets/plugins/datetimepicker/js/picker.date.js', []) }}"></script>
    <script src="{{ url('assets/plugins/bootstrap-material-datetimepicker/js/moment.min.js', []) }}"></script>
	<script src="{{ url('assets/plugins/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.min.js', []) }}"></script>
    <script>
		$('.datepicker').pickadate({
			selectMonths: true,
	        selectYears: true
		}),
		$('.timepicker').pickatime()
	</script>
	<script>
		$(function () {
			$('#date-time').bootstrapMaterialDatePicker({
				format: 'YYYY-MM-DD HH:mm'
			});
			$('#date').bootstrapMaterialDatePicker({
				time: false
			});
			$('#time').bootstrapMaterialDatePicker({
				date: false,
				format: 'HH:mm'
			});
		});
	</script>
@endsection
