<div class="modal-header">
    <h5 class="modal-title">Upload Jadwal</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
    <form class="row g-3" action="{{ url('masteradmin/data/jadwal/simpan', []) }}" method="post">
        @csrf
        <div class="col-12">
            <label for="inputLastName1" class="form-label">File Jadwal </label>
            <div class="input-group"> <span class="input-group-text"><i class='bx bxs-user'></i></span>
                <input type="file" class="form-control border-start-0" name="periode" placeholder="Example : Oktober 2022"  required/>
            </div>
        </div>
      
       
    
</div>
<div class="modal-footer">
    {{-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> --}}
    <button type="submit" class="btn-primary"><i class="fa fa-upload"></i> Upload</button>
</div>
</form>