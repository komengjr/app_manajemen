$(document).ready(function() {
    $(document).on('click', '#buttonmasterdatakaryawan', function(e) {
                e.preventDefault();
                var url = $(this).data('url');
                $.ajax({
                        url: url,
                        type: 'GET',
                        dataType: 'html'
                    })
                    .done(function(data) {
                        $('#showdatabody').html(data);
                    })
                    .fail(function() {
                        $('#showdatabody').html(
                            '<i class="fa fa-info-sign"></i> Something went wrong, Please try again...'
                            );
                    });
    });
    $(document).on('click', '#buttondetailkaryawan', function(e) {
                e.preventDefault();
                var url = $(this).data('url');
                $.ajax({
                        url: url,
                        type: 'GET',
                        dataType: 'html'
                    })
                    .done(function(data) {
                        $('#showdatabody').html(data);
                    })
                    .fail(function() {
                        $('#showdatabody').html(
                            '<i class="fa fa-info-sign"></i> Something went wrong, Please try again...'
                            );
                    });
    });
    $(document).on('click', '#buttondetailabsensikaryawan', function(e) {
                e.preventDefault();
                var url = $(this).data('url');
                $.ajax({
                        url: url,
                        type: 'GET',
                        dataType: 'html'
                    })
                    .done(function(data) {
                        $('#masterbodydatakaryawan').html(data);
                    })
                    .fail(function() {
                        $('#masterbodydatakaryawan').html(
                            '<i class="fa fa-info-sign"></i> Something went wrong, Please try again...'
                            );
                    });
    });
    $(document).on('click', '#buttonjadwalabsensikaryawan', function(e) {
                e.preventDefault();
                var url = $(this).data('url');
                $.ajax({
                        url: url,
                        type: 'GET',
                        dataType: 'html'
                    })
                    .done(function(data) {
                        $('#masterbodydatakaryawan').html(data);
                    })
                    .fail(function() {
                        $('#masterbodydatakaryawan').html(
                            '<i class="fa fa-info-sign"></i> Something went wrong, Please try again...'
                            );
                    });
    });
    $(document).on('click', '#buttonlihatjadwalperiode', function(e) {
                e.preventDefault();
                var url = $(this).data('url');
                $.ajax({
                        url: url,
                        type: 'GET',
                        dataType: 'html'
                    })
                    .done(function(data) {
                        $('#showdatajadwalperiode').html(data);
                    })
                    .fail(function() {
                        $('#showdatajadwalperiode').html(
                            '<i class="fa fa-info-sign"></i> Something went wrong, Please try again...'
                            );
                    });
    });
    $(document).on('click', '#buttoncetakjadwalperiode', function(e) {
                e.preventDefault();
                var url = $(this).data('url');
                $.ajax({
                        url: url,
                        type: 'GET',
                        dataType: 'html'
                    })
                    .done(function(data) {
                        $('#showdatajadwalperiode').html(data);
                    })
                    .fail(function() {
                        $('#showdatajadwalperiode').html(
                            '<i class="fa fa-info-sign"></i> Something went wrong, Please try again...'
                            );
                    });
    });
    $(document).on('click', '#buttonuploadjadwalperiode', function(e) {
                e.preventDefault();
                var url = $(this).data('url');
                $.ajax({
                        url: url,
                        type: 'GET',
                        dataType: 'html'
                    })
                    .done(function(data) {
                        $('#showdatajadwalperiodesmall').html(data);
                    })
                    .fail(function() {
                        $('#showdatajadwalperiodesmall').html(
                            '<i class="fa fa-info-sign"></i> Something went wrong, Please try again...'
                            );
                    });
    });
   
   
});