function check(){
    $('#loginPassword, #confirmLogin').on('keyup', function () {
        if ($('#loginPassword').val() == $('#confirmLogin').val()) {
          $('#message').html('').css('color', 'green');
        } else 
          $('#message').html('Login Password does not match').css('color', 'red');
      });
      $('#transactPassword, #confirmTransact').on('keyup', function () {
        if ($('#transactPassword').val() == $('#confirmTransact').val()) {
          $('#message1').html('').css('color', 'green');
        } else 
          $('#message1').html('Transaction Password does not match').css('color', 'red');
      });
}