$(document).ready(function(){
  //console.log("Hello I'm inside the function");
    $('#loginPassword, #confirmLogin').keyup(function () {
      //console.log("hello I'm inside another function");
        if ($('#loginPassword').val() == $('#confirmLogin').val()) {
          $('#message').html('').css('color', 'green');
        } else 
          $('#message').html('Login Password does not match').css('color', 'red');
      });
      $('#transactPassword, #confirmTransact').keyup(function () {
        if ($('#transactPassword').val() == $('#confirmTransact').val()) {
          $('#message1').html('').css('color', 'green');
        } else 
          $('#message1').html('Transaction Password does not match').css('color', 'red');
      });
});