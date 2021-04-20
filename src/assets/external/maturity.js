function currentDateTime(){
    if(document.getElementById("tranType").value=='IMPS'){
        document.getElementById("maturity").setAttribute("disabled","disabled");
    }
    else{
        document.getElementById("maturity").removeAttribute("disabled");
        var dtToday = new Date();
    }
}   
    function check(){
        $('#amount').on('keyup', function () {
            if ($('#amount').val() <= 0)
            {
              $('#message').html('Amount must be greater than 0').css('color', 'red');
            }
            else if($('#amount').val() > 200000)
            {
                $('#message').html('Amount must be less than 2,00,000').css('color', 'red');

            }
            else 
            {
                $('#message').html('');
            }
        }
        
        )};