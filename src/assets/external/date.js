$(function(){
    var dtToday = new Date();
    
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
    month = '0' + month.toString();
    if(day < 10)
    day = '0' + day.toString();
    
    var maxDate = year + '-' + month + '-' + day;
    $('#dob').attr('max', maxDate);
    $('#startdate').attr('max', maxDate);
    $('#enddate').attr('max', maxDate);

    });

function compareDate(){
    
    
    var StartDate = document.getElementById("startdate").value;
    console.log(StartDate);
    document.getElementById("enddate").setAttribute("min", StartDate);
    console.log(document.getElementById("enddate").value);
}