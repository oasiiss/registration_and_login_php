window.onload = function () {
    const message = sessionStorage.getItem('login_page_message');

    if (message) {
        toastr.success(message);
        sessionStorage.removeItem('login_page_message');
    }
        
};


$(document).ready(function() {
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();

        $.ajax({
            type: 'POST',
            url: './actions/login.php',
            data: $(this).serialize(),
            success: function(response) {
                if (response.success) {
                    toastr.success(response.message);
                    sessionStorage.setItem('users_page_message', response.message);
                    const rootUrl = window.location.origin + window.location.pathname.replace(/\/[^\/]*$/, '/');
                    window.location.href = rootUrl + 'kullanicilar';
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