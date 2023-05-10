(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel
  $(".image_slider").owlCarousel({
    loop: true,
    margin: 30,
    navText: [
      // '<i class="fas fa-angle-left"><i/>',
      // '<i class="fas fa-angle-right"><i/>'
      '<i><img src="assets/img/arrow_left.svg" alt=""></i>',
      '<i><img src="assets/img/arrow_right.svg" alt=""></i>'
    ],
    nav: true,
    // center: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      490:{
        items: 2
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });

 
})(jQuery);
