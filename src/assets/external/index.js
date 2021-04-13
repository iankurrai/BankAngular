$(document).ready(function(){
    $(window).scroll(function(){
      var positionTop = $(document).scrollTop();
    //   console.log(Math.floor(positionTop));
      var alertOn = $(".office-image").offset().top;
    //   console.log(Math.floor(alertOn));
      if (positionTop > alertOn ) {
        updateCount();
      }
    });
  });
  
  function updateCount() {
      $('.counter-years').animate({
          counter: 14
      }, {
          duration: 4000,
          easing: 'swing',
          step: function(now) {
              $(this).text(Math.ceil(now));
          },
          complete: updateCount
      });
  
      $('.counter-customers').animate({
          counter: 14996
      }, {
          duration: 4000,
          easing: 'swing',
          step: function(now) {
              $(this).text(Math.ceil(now));
          },
          complete: updateCount
      });
  
      $('.counter-branches').animate({
          counter: 5326
      }, {
          duration: 4000,
          easing: 'swing',
          step: function(now) {
              $(this).text(Math.ceil(now));
          },
          complete: updateCount
      });
  
      $('.counter-awards').animate({
          counter: 22
      }, {
          duration: 4000,
          easing: 'swing',
          step: function(now) {
              $(this).text(Math.ceil(now));
          },
          complete: updateCount
      });
  };