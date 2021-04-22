function currentDateTime(){
    if(document.getElementById("tranType").value=='IMPS'){
        document.getElementById("maturity").setAttribute("disabled","disabled");
    }
    else{
        document.getElementById("maturity").removeAttribute("disabled");
        var dtToday = new Date();
        var month = dtToday.getMonth() + 1;
        var day = dtToday.getDate();
        var year = dtToday.getFullYear();
        if(month < 10)
        month = '0' + month.toString();
        if(day < 10)
        day = '0' + day.toString();
    
        var maxDate = year + '-' + month + '-' + day;
        console.log(maxDate);
        document.getElementById("maturity").setAttribute("min", maxDate);
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