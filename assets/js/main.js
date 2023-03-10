
$(document).ready(function () {
  'use strict';

  // Preloader
  $(window).ready(function () {
    $("#preloader").delay(500).fadeOut("fade");
  });

  // Sticky Menu
  $(window).on('scroll', function () {
    if ($(this).scrollTop() >= 200) {
      $('.navbar').addClass('fixed-top');
    } else if ($(this).scrollTop() == 0) {
      $('.navbar').removeClass('fixed-top');
    }
  });

  // Hamburger Menu Trigger
  const trigger = document.getElementById('js-nav-trigger');
  trigger.addEventListener('click', function (e) {
    e.preventDefault();
    trigger.classList.toggle('is-active');
  }, false);

    // Add smooth scrolling to all links
    $(".navbar-nav .nav-link").click (function () {
      $('html, body').animate({
        scrollTop: $('#' + $(this).data('value')).offset().top - 89
      }, 100);
    });

  // educationSwiper
  const swiper = new Swiper('.educationSwiper', {
    spaceBetween: 100,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    navigation: {
      nextEl: ".fi-rr-arrow-right",
      prevEl: ".fi-rr-arrow-left",
    },
  });

  
mers_tm_owl_carousel()

  // Scroll back to top
  var progressPath = document.querySelector('.scroll-up path');
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength / height);
    progressPath.style.strokeDashoffset = progress;
  }
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 50;
  var duration = 25;
  jQuery(window).on('scroll', function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.scroll-up').addClass('active-progress');
    } else {
      jQuery('.scroll-up').removeClass('active-progress');
    }
  });
  jQuery('.scroll-up').on('click', function (event) {
    event.preventDefault();
    jQuery('html, body').animate({
      scrollTop: 0
    }, duration);
    return false;
  });


  
  // kursor
  new kursor({
    type: 1,
    color: "#eb4a4a"
  });

  
  // mixitup
  var containerEl = document.querySelector('.auction-filter');
  var mixer = mixitup(containerEl);












});

// owl-carousel
function mers_tm_owl_carousel(){
  "use strict";
  
  var carousel1 = jQuery('.skills .carousel1 .owl-carousel');
  carousel1.owlCarousel({
      loop: true,
      items: 10,
      lazyLoad: false,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 3000,
      dots: true,
      nav: false,
      navSpeed: true,
      responsive: {
          0 : {
            items: 4
          },
          480 : {
            items: 4
          },
          768 : {
            items: 6
          },
          1040 : {
            items: 8
          },
          1200 : {
            items: 10
          },
          1600 : {
            items: 10
          },
          1920 : {
            items: 12
          }
      }
  });

  var carousel2 = jQuery('.skills .carousel2 .owl-carousel');
  carousel2.owlCarousel({
      rtl: true,
      loop: true,
      items: 10,
      lazyLoad: false,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 3000,
      dots: true,
      nav: false,
      navSpeed: true,
      responsive: {
          0 : {
            items: 4
          },
          480 : {
            items: 4
          },
          768 : {
            items: 6
          },
          1040 : {
            items: 7
          },
          1200 : {
            items: 9
          },
          1600 : {
            items: 9
          },
          1920 : {
            items: 11
          }
      }
  });
}