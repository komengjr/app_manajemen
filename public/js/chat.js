$(document).ready(function() {
    $(document).on('click', '#buttonchatting', function(e) {
                e.preventDefault();
                var url = $(this).data('url');
                $.ajax({
                        url: url,
                        type: 'GET',
                        dataType: 'html'
                    })
                    .done(function(data) {
                        $('#showchat').html(data);
                    })
                    .fail(function() {
                        $('#showchat').html(
                            '<i class="fa fa-info-sign"></i> Something went wrong, Please try again...'
                            );
                    });
    });
   
   
});