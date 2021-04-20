    function printCtrl() 
    {
            window.print();
            sessionStorage.removeItem('BEN_NO');
            sessionStorage.removeItem('MODE');
            sessionStorage.removeItem('DATE');
            sessionStorage.removeItem('REMARKS');
            sessionStorage.removeItem('AMOUNT');
            sessionStorage.removeItem('TRAN_ID');
            window.location.replace("/userdashboard")
    }
    
