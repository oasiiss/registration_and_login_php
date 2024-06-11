$(document).ready(function() {
    $('#registerForm').on('submit', function(e) {
        e.preventDefault();

        $.ajax({
            type: 'POST',
            url: './actions/register.php',
            data: $(this).serialize(),
            success: function(response) {
                if (response.success) {
                    toastr.success(response.message);
                    sessionStorage.setItem('login_page_message', response.message);
                    const rootUrl = window.location.origin + window.location.pathname.replace(/\/[^\/]*$/, '/');
                    window.location.href = rootUrl + 'giris';
                } else {
                    toastr.error(response.message);
                }
            },
            error: function(xhr, status, error) {
                toastr.error('Bilinmeyen bir hata oluştu: ' + error);
            }
        });
    });
});