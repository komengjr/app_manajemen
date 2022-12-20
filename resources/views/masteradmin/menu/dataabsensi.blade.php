<table class="table table-striped table-hover table-sm mb-0" id="example1" style="width:100%">
    <thead>
        <tr>
            <th class="p-2">No</th>
            <th>ID Finger</th>
            <th>Name</th>
            <th>status</th>
            <th>No PIN</th>
            <th>Kode Verifikasi</th>
            <th width="100">Tgl & Waktu</th>

            <th class="text-center">Action</th>
        </tr>
    </thead>
    <tbody>
        @php
            $no = 1;
        @endphp
        @foreach ($data_log as $data)
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
                <td>{{ Str::substr($data->tgl_waktu, 0, 2) }}-{{ Str::substr($data->tgl_waktu, 3, 2) }}-{{ Str::substr($data->tgl_waktu, 6, 4) }}
                    , {{ Str::substr($data->tgl_waktu, 11, 5) }}</td>

                <td class="text-center">
                    <button class="btn-warning btn-sm"><i class='bx bx-pencil font-24' ></i></button>
                    <button class="btn-danger btn-sm"><i class='bx bx-trash font-24' ></i></button>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>
<script>
    $(document).ready(function() {
        $('#example1').DataTable();
      } );
</script> 