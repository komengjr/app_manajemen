@extends('layouts.base')
@section('content')
    <!--end header -->
    <!--start page wrapper -->
    <div class="page-wrapper" style="color: #0400ff">
        <div class="page-content">
            <!--breadcrumb-->
            <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                <div class="breadcrumb-title pe-3">Data Absensi </div>
                <div class="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0 p-0">
                            <li class="breadcrumb-item"><a href="javascript:;"><img src="{{ url($data_log[0]->gambar, []) }}" alt="" srcset="" width="30"></a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">{{$data_log[0]->name}} ( {{$data_log[0]->email}} )</li>
                        </ol>
                    </nav>
                </div>
                <div class="ms-auto">
                    {{-- <div class="btn-group">
                        <button type="button" class="btn btn-light">Settings</button>
                        <button type="button" class="btn btn-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">	<span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">	<a class="dropdown-item" href="javascript:;">Action</a>
                            <a class="dropdown-item" href="javascript:;">Another action</a>
                            <a class="dropdown-item" href="javascript:;">Something else here</a>
                            <div class="dropdown-divider"></div>	<a class="dropdown-item" href="javascript:;">Separated link</a>
                        </div>
                    </div> --}}
                </div>
            </div>
            <!--end breadcrumb-->
            <div class="card">
                <div class="card-body">
                    <div class="table-responsive">
                        <div id='calendar'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <script src="{{ url('assets/plugins/fullcalendar/js/main.min.js', []) }}"></script>

	<script>
		document.addEventListener('DOMContentLoaded', function () {
            // var win = window.open('http://stackoverflow.com/', '_blank');
			var calendarEl = document.getElementById('calendar');
			var calendar = new FullCalendar.Calendar(calendarEl, {
				headerToolbar: {
					left: 'prev,next today',
					center: 'title',
					right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
				},
				initialView: 'dayGridMonth',
				initialDate: '{{$date}}',
				navLinks: true, // can click day/week names to navigate views
				selectable: true,
				nowIndicator: true,
				dayMaxEvents: true, // allow "more" link when too many events
				editable: false,
				selectable: true,
				businessHours: true,
				dayMaxEvents: false, // allow "more" link when too many events
				events: [
                    @foreach($data_log as $data_log )
                    @if (Str::substr($data_log->status, 2, 6) == 'Masuk') {
                        
                    
                            title: '{{Str::substr($data_log->status, 2, 6)}}',
                            color: "blue",
                            start: '{{ Str::substr($data_log->tgl_waktu, 6, 4) }}-{{ Str::substr($data_log->tgl_waktu, 3, 2) }}-{{ Str::substr($data_log->tgl_waktu, 0, 2) }}T{{ Str::substr($data_log->tgl_waktu, 11, 5) }}'
                        
                    }, @else {
                        
                    
                            title: '{{Str::substr($data_log->status, 2, 6)}}',
                            color: "#ff0000",
                            start: '{{ Str::substr($data_log->tgl_waktu, 6, 4) }}-{{ Str::substr($data_log->tgl_waktu, 3, 2) }}-{{ Str::substr($data_log->tgl_waktu, 0, 2) }}T{{ Str::substr($data_log->tgl_waktu, 11, 5) }}'
                        
                    }, 
                    @endif
                    
                    @endforeach
                    {
                            
                        
                            title: '--- Masuk ---',
                            color: "yellow",

                            start: '2022-10-10T07:30',
                        
                    }, 
                    {
                            
                        
                            title: "--- Keluar ---",
                            color: "yellow",

                            start: '2022-10-10T14:00',
                        
                    }, 
                    {
                            
                        
                            title: "form Lembur",
                            color: "green",
                            url: "{{ url('lihat/form/lembur', []) }}",
                            start: '2022-10-10 20:00:00',
                            end: '2022-10-10 21:00:00'
                        
                    }, 
                   
                // {
				// 	title: 'Click for Google',
				// 	url: 'http://google.com/',
				// 	start: '2022-10-01'
				// }
            ]
			});
			calendar.render();
		});
	</script>
@endsection
