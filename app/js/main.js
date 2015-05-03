"use strict";

var main = $('body');
var currentCls = 'home';
var currentSection = 'home';
var sections = {
  home: $('#home'),
  processes: $('#processes'),
  services: $('#services'),
  testimonials: $('#testimonials'),
  projects: $('#projects'),
  mentors: $('#mentors'),
  about_us: $('#about-us'),
  faq: $('#faq'),
  contact: $('#contact')
};

var mentors_slider = $('.mentors-slider').bxSlider({
  auto: true,
  autoDelay: 1000,
  slideWidth: 220,
  minSlides: 1,
  maxSlides: 5,
  moveSlides: 1,
  slideMargin: 10
});

$('.testimonials-slider').bxSlider({
  auto: true,
  autoDelay: 1000,
  slideWidth: 900,
  slideMargin: 10
});

var fixed_menu_active = false;

function changeBackground(c){
  main.removeClass();
  main.attr('class',c);
}

function changeOptionSelected(){
  $('#menu nav>ul>li>a').removeClass('option-selected');
  $('#menu nav ul li a[href="#'+currentSection+'"]').addClass('option-selected');
}

function isScrolledIntoView(c) {
  var e = $(window).scrollTop();
  var d = e + $(window).height();
  var a = $(c).offset().top;
  return ((a <= d) && (a >= e));
}

function checkActive(a) {
  var c = a.data('class');
  if (c !== currentCls && isScrolledIntoView(a)) {
    changeBackground(c);
    currentCls = c;
  }
}

function onchangeSection(){
  for (var section in sections) {
    var a = sections[section];
    if (sections.hasOwnProperty(section)) {
      checkActive(a);
    }
  }
}

function displayHeader() {
  var windowScrollTop = $(window).scrollTop();

  if(windowScrollTop>=$('#home-content').position().top - 120 || $( window ).width() <= 768){
    fixed_menu_active = true;
    $('#menu').addClass("fixed-menu");
    $('#logoMenu').addClass("fixed-logoMenu");
  }else{
    fixed_menu_active = false;
    $('#menu nav>ul>li>a').removeClass('option-selected');
    $('#menu').removeClass("fixed-menu");
    $('#logoMenu').removeClass("fixed-logoMenu");
  }

  //get current section
  if((windowScrollTop >= $('#home').position().top -100 && windowScrollTop < $('#services').position().top - 100) || windowScrollTop == 0) {
    currentSection = 'home';
  }else if(windowScrollTop >= $('#services').position().top - 100 && windowScrollTop < $('#projects').position().top -100){
    currentSection = 'services';
  }else if(windowScrollTop >= $('#projects').position().top - 100 && windowScrollTop < $('#about-us').position().top -100){
    currentSection = 'projects';
  }else if(windowScrollTop >= $('#about-us').position().top - 100 && windowScrollTop < $('#contact').position().top -500){
    currentSection = 'about-us';
  }else{
    currentSection = 'contact';
  }

  changeOptionSelected();
}

function mentors_resize() {
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
}

$( window ).scroll(function() {
  displayHeader();
  onchangeSection();
});

$( window ).resize(function() {
  displayHeader();
  mentors_resize();
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

  $('#menu nav ul li a').hover(function(){
    if(fixed_menu_active){
      $(this).css("border-color","#F8B001");
    }else{
       $(this).css("border-color","");
    }
  },function(){
    $(this).css("border-color","");
  });

  $('#menu nav ul li a').on('click', function(){
    $('#menu nav>ul>li>a').removeClass('option-selected');
    $(this).toggleClass('option-selected');
    if ($('#toggle').hasClass('open')) {
      $('#toggle').removeClass('open');
      $('#menu nav').slideUp(500, function(){
        $(this).removeAttr('style');
      });
    }
  });

  $('#menu a[href^="#"]').on('click', function(e) {
    var target = $(this.hash);
    if( target.length ) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1500);
    }
  });

  $('#home a[href^="#"]').on('click', function(e) {
    var target = $(this.hash);
    if( target.length ) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1500);
    }
  });

  $("#contact-submit1").on('click',function() {
    var $contact_form = $('#contact-form');
    var fields = $contact_form.serialize();

    $.ajax({
      type: "POST",
      url: "php/contact.php",
      data: fields,
      dataType: 'json',
      success: function(response) {

        if(response.status){
          $('#contact-form input').val('');
        }

        $('#response').empty().html(response.html);
      }
    });
    return false;
  });

  $("#contact-submit2").on('click',function() {
    var $contact_form = $('#contact-form');
    var fields = $contact_form.serialize();

    $.ajax({
      type: "POST",
      url: "php/contact.php",
      data: fields,
      dataType: 'json',
      success: function(response) {

        if(response.status){
          $('#contact-form input').val('');
        }

        $('#response').empty().html(response.html);
      }
    });
    return false;
  });

  // quicksand
  $('#filterOptions li.active a').attr('class');

  var $holder = $('#project-list');

  var $data = $holder.clone();

  $('#filterOptions li a').click(function() {

    $('#filterOptions li').removeClass('active');

    var $filterType = $(this).attr('class');
    $(this).parent().addClass('active');
    var $filteredData;
    if ($filterType === 'todos') {
      $filteredData = $data.find('article');
    }
    else {
      $filteredData = $data.find('article[data-type=' + $filterType + ']');
    }

    $holder.quicksand($filteredData, {
      duration: 800,
      easing: 'easeInCubic',
      adjustHeight: false,
      adjustWidth :false
    });

    return false;
  });
  //end quicksand

  changeBackground();
  displayHeader();
  mentors_resize();

});
