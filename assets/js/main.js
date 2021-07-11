jQuery(document).ready(function(){


  jQuery(".owl-carousel2").owlCarousel({
    loop:true,
    center: false,
    margin:20,
    responsiveClass:true,
    nav:true,
    responsive:{
      0:{
        items:2,
        nav:false,
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:4,
        nav:true,
        loop:true
      }
    }
  }
  );

  jQuery(".owl-carousel3").owlCarousel({
    loop:true,
    center: false,
    margin:20,
    responsiveClass:true,
    nav:true,
    responsive:{
      0:{
        items:1,
        nav:false,
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        nav:true,
        loop:true
      }
    }
  }
  );

  jQuery(".owl-carousel4").owlCarousel({
    loop:true,
    center: false,
    margin:20,
    responsiveClass:true,
    nav:true,
    responsive:{
      0:{
        items:1,
        nav:false,
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:2,
        nav:true,
        loop:true
      }
    }
  }
  );



});

function myFunction(x) {
  x.classList.toggle("change");
}