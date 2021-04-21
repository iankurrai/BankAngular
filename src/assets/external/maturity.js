function currentDateTime(){
    if(document.getElementById("tranType").value=='IMPS'){
        document.getElementById("maturity").setAttribute("disabled","disabled");
    }
    else{
        document.getElementById("maturity").removeAttribute("disabled");
    }
}