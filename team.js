$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      margin: 20,
      nav: true,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  });
  