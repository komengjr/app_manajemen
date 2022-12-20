$(document).ready(function() {
    $(document).on('click', '#buttonformdatadiri', function(e) {
                e.preventDefault();
                var url = $(this).data('url');
                $.ajax({
                        url: url,
                        type: 'GET',
                        dataType: 'html'
                    })
                    .done(function(data) {
                        $('#showdatapribadi').html(data);
                    })
                    .fail(function() {
                        $('#showdatapribadi').html(
                            '<i class="fa fa-info-sign"></i> Something went wrong, Please try again...'
                            );
                    });
    });
    $(document).on('click', '#buttonformpendidikan', function(e) {
                e.preventDefault();
                var url = $(this).data('url');
                $.ajax({
                        url: url,
                        type: 'GET',
                        dataType: 'html'
                    })
                    .done(function(data) {
                        $('#showdatapribadi').html(data);
                    })
                    .fail(function() {
                        $('#showdatapribadi').html(
                            '<i class="fa fa-info-sign"></i> Something went wrong, Please try again...'
                            );
                    });
    });
    $(document).on('click', '#buttonformvaksin', function(e) {
                e.preventDefault();
                var url = $(this).data('url');
                $.ajax({
                        url: url,
                        type: 'GET',
                        dataType: 'html'
                    })
                    .done(function(data) {
                        $('#showdatapribadi').html(data);
                    })
                    .fail(function() {
                        $('#showdatapribadi').html(
                            '<i class="fa fa-info-sign"></i> Something went wrong, Please try again...'
                            );
                    });
    });
    $(document).on('click', '#buttonformsertifikasi', function(e) {
                e.preventDefault();
                var url = $(this).data('url');
                $.ajax({
                        url: url,
                        type: 'GET',
                        dataType: 'html'
                    })
                    .done(function(data) {
                        $('#showdatapribadi').html(data);
                    })
                    .fail(function() {
                        $('#showdatapribadi').html(
                            '<i class="fa fa-info-sign"></i> Something went wrong, Please try again...'
                            );
                    });
    });
    // $(document).on('click', '#datacabangmasteradmin', function(e) {
    //             e.preventDefault();
    //             var url = $(this).data('url');
    //             $.ajax({
    //                     url: url,
    //                     type: 'GET',
    //                     dataType: 'html'
    //                 })
    //                 .done(function(data) {
    //                     $('#bodyformdatamasteradminx').html(data);
    //                 })
    //                 .fail(function() {
    //                     $('#bodyformdatamasteradminx').html(
    //                         '<i class="fa fa-info-sign"></i> Something went wrong, Please try again...'
    //                         );
    //                 });
    // });
    // $(document).on('click', '#buttondetiledatacabang', function(e) {
    //             e.preventDefault();
    //             var url = $(this).data('url');
    //             $.ajax({
    //                     url: url,
    //                     type: 'GET',
    //                     dataType: 'html'
    //                 })
    //                 .done(function(data) {
    //                     $('#divtablecabang').html(data);
    //                 })
    //                 .fail(function() {
    //                     $('#divtablecabang').html(
    //                         '<i class="fa fa-info-sign"></i> Something went wrong, Please try again...'
    //                         );
    //                 });
    // });
    // $(document).on('click', '#buttontambahuserbaru', function(e) {
    //             e.preventDefault();
    //             var url = $(this).data('url');
    //             $.ajax({
    //                     url: url,
    //                     type: 'GET',
    //                     dataType: 'html'
    //                 })
    //                 .done(function(data) {
    //                     $('#divinputuser').html(data);
    //                 })
    //                 .fail(function() {
    //                     $('#divinputuser').html(
    //                         '<i class="fa fa-info-sign"></i> Something went wrong, Please try again...'
    //                         );
    //                 });
    // });
    // $(document).on('click', '#editdatauserbaru', function(e) {
    //             e.preventDefault();
    //             var url = $(this).data('url');
    //             $.ajax({
    //                     url: url,
    //                     type: 'GET',
    //                     dataType: 'html'
    //                 })
    //                 .done(function(data) {
    //                     $('#divinputuser').html(data);
    //                 })
    //                 .fail(function() {
    //                     $('#divinputuser').html(
    //                         '<i class="fa fa-info-sign"></i> Something went wrong, Please try again...'
    //                         );
    //                 });
    // });
    
    // $(document).on('click', '#simpandatauserbaru', function(e) {
    //     var data = $('#formpostuserbaru').serialize();
    //     e.preventDefault();
    //     var url = $(this).data('url');
    //     console.log(data);
    //     $.ajax({
    //             url: url,
    //             headers: {
    //                 'X-CSRF-TOKEN': $('meta[name="csrf"]').attr('content')
    //             },
    //             type: 'POST',
    //             data: data,
    //             dataType: 'html'
    //         })
    //         .done(function(data) {
    //             $('#divtableuser').html(data);
    //             success_notibaru();
    //         })
    //         .fail(function() {
    //             $('#divtableuser').html(
    //                 '<i class="fa fa-info-sign"></i> Something went wrong, Please try again...' );
    //         });
    // });
    // $(document).on('click', '#simpandatauseredit', function(e) {
    //     var data = $('#formpostuseredit').serialize();
    //     e.preventDefault();
    //     var url = $(this).data('url');
    //     console.log(data);
    //     $.ajax({
    //             url: url,
    //             headers: {
    //                 'X-CSRF-TOKEN': $('meta[name="csrf"]').attr('content')
    //             },
    //             type: 'POST',
    //             data: data,
    //             dataType: 'html'
    //         })
    //         .done(function(data) {
    //             $('#divtableuser').html(data);
    //             success_notibaru();
    //         })
    //         .fail(function() {
    //             $('#divtableuser').html(
    //                 '<i class="fa fa-info-sign"></i> Something went wrong, Please try again...' );
    //         });
    // });
   
    // $(document).on('click', '#datatitikmaps', function(e) {
    //     e.preventDefault();
    //     var url = $(this).data('url');
    //     $.ajax({
    //             url: url,
    //             type: 'GET',
    //             dataType: 'html'
    //         })
    //         .done(function(data) {
    //             $('#bodyformdatamasteradminx').html(data);
    //         })
    //         .fail(function() {
    //             $('#bodyformdatamasteradminx').html(
    //                 '<i class="fa fa-info-sign"></i> Something went wrong, Please try again...'
    //                 );
    //         });
    // });
});