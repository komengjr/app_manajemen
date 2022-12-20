<div class="modal-header">
    <h5 class="modal-title">Data Jadwal asd</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
    <div class="accordion accordion-flush" id="accordionFlushExample">
        @foreach ($data as $data)
        
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-{{$data->id_user}}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flushx-{{$data->id_user}}" aria-expanded="false"
                    aria-controls="flush-collapseOne">
                    <img src="{{ url($data->gambar, []) }}" alt="" width="50" class="mx-5"> 
                    {{$data->name}}
                </button>
            </h2>
            <div id="flushx-{{$data->id_user}}" class="accordion-collapse collapse"
                aria-labelledby="flush-{{$data->id_user}}" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    @php
                        
                    @endphp
                    <div class="row row-cols-auto row-cols-2 row-cols-md-2 row-cols-lg-4 g-3">
                        
                        <div class="col">
                            <div class="p-4 border border-3 border-warning text-center rounded bg-light">Jadwal</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        @endforeach
      
    </div>
</div>
<div class="modal-footer">
    {{-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> --}}
    <button type="submit" class="btn-primary"><i class="fa fa-save"></i> Simapn Jadwal</button>
</div>
