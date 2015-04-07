"use strict";

var main = $('body');
var currentCls = 'home';
var sections = {
  home: $('#home'),
  about_us: $('#about-us'),
  processes: $('#processes'),
  projects: $('#projects'),
  services: $('#services'),
  mentors: $('#mentors'),
  benefits: $('#benefits'),
  faq: $('#faq'),
  contact: $('#contact'),
};

function isScrolledIntoView(c) {
  var e = $(window).scrollTop();
  var d = e + $(window).height();
  var a = $(c).offset().top;
  return ((a <= d) && (a >= e));
}

function checkActive(a) {
  var c = a.data('class');
  console.log('C -> ',c);
  console.log('CURRENT CLASS -> ',currentCls);
  if (c !== currentCls && isScrolledIntoView(a)) {
    //main.toggleClass(currentCls + " " + a.data("class"));
    main.removeClass();
    main.attr('class',c);
    currentCls = a.data("class");
  }
}

function _onScroll(){
  for (var section in sections) {
    var a = sections[section];
    if (sections.hasOwnProperty(section)) {
      checkActive(a);
    }
  }
}

$(window).on('scroll',function(){
  _onScroll();
});

$(window).on('load',function(){

  $('#toggle').on('click', function(){
    $(this).toggleClass('open');

    if ($('#toggle').hasClass('open')) {
      $('#menu nav').slideDown(500);
    } else {
      $('#menu nav').slideUp(500, function(){
        $(this).removeAttr('style');
      });
    }
  });

  $('#menu nav ul li a').on('click', function(){
    if ($('#toggle').hasClass('open')) {
      $('#toggle').removeClass('open');
      $('#menu nav').slideUp(500, function(){
        $(this).removeAttr('style');
      });
    }
  });

  $('a[href^="#"]').on('click', function(e) {
    var target = $(this.hash);
    if( target.length ) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 2000);
    }
  });

  var mentors_slider = $('.mentors-slider').bxSlider({
    slideWidth: 220,
    minSlides: 1,
    maxSlides: 4,
    moveSlides: 1,
    slideMargin: 10
  });

  $( window ).resize(function() {
    var window_width = $(window).width();
    //behavior for mentors-slider
    if(window_width>991){
      mentors_slider.reloadSlider({
        slideWidth: 220,
        minSlides: 1,
        maxSlides: 4,
        moveSlides: 1,
        slideMargin: 10
      });
    }else if(window_width>735 && window_width<=991){
      mentors_slider.reloadSlider({
        slideWidth: 220,
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 1,
        slideMargin: 10
      });
    }else if(window_width>508 && window_width<=735){
      mentors_slider.reloadSlider({
        slideWidth: 220,
        minSlides: 1,
        maxSlides: 2,
        moveSlides: 1,
        slideMargin: 10
      });
    }else if(window_width<495){
      mentors_slider.reloadSlider({
        slideWidth: 220,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        slideMargin: 10
      });
    }
  });

  _onScroll();

});
