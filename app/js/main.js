"use strict";

var main = $('body');

var currentPart = 'home';

var currentSection = 'home';

/*var mentors_slider = $('.mentors-slider').bxSlider({
  auto: true,
  autoDelay: 1000,
  slideWidth: 220,
  minSlides: 1,
  maxSlides: 5,
  moveSlides: 1,
  slideMargin: 10
});*/

$('.background-slider').bxSlider({
  auto: true,
  autoDelay: 1000,
  pager: false,
  controls: false
});

$('.testimonials-slider').bxSlider({
  auto: true,
  autoDelay: 1000,
  slideWidth: 900,
  slideMargin: 10
});

var fixed_menu_active = false;

function changeBackground(){
  main.removeClass();
  main.attr('class',currentSection);
}

function changeOptionSelected(){
  $('#menu nav>ul>li>a').removeClass('option-selected');
  $('#menu nav ul li a[href="#'+currentPart+'"]').addClass('option-selected');
}

function onchangeSection(){
  var windowScrollTop = $(window).scrollTop();
  //get current section
  if((windowScrollTop >= $('#home').position().top -100 && windowScrollTop < $('#processes').position().top - 100) || windowScrollTop === 0) {
    currentPart = 'home';
    currentSection = 'home';
  }else if(windowScrollTop >= $('#processes').position().top - 100 && windowScrollTop < $('#services').position().top -100){
    currentPart = 'home';
    currentSection = 'processes';
  }else if(windowScrollTop >= $('#services').position().top - 100 && windowScrollTop < $('#testimonials').position().top -100){
    currentPart = 'services';
    currentSection = 'services';
  }else if(windowScrollTop >= $('#testimonials').position().top - 100 && windowScrollTop < $('#projects').position().top -100){
    currentPart = 'services';
    currentSection = 'testimonials';
  }else if(windowScrollTop >= $('#projects').position().top - 100 && windowScrollTop < $('#about-us').position().top -100){
    currentPart = 'projects';
    currentSection = 'projects';
  }
  /*else if(windowScrollTop >= $('#projects').position().top - 100 && windowScrollTop < $('#mentors').position().top -100){
    currentPart = 'projects';
    currentSection = 'projects';
  }else if(windowScrollTop >= $('#mentors').position().top - 100 && windowScrollTop < $('#about-us').position().top -100){
    currentPart = 'projects';
    currentSection = 'mentors';
  }*/else if(windowScrollTop >= $('#about-us').position().top - 100 && windowScrollTop < $('#faq').position().top -100){
    currentPart = 'about-us';
    currentSection = 'about-us';
  }else if(windowScrollTop >= $('#faq').position().top - 100 && windowScrollTop < $('#contact').position().top -300){
    currentPart = 'about-us';
    currentSection = 'faq';
  }else{
    currentPart = 'contact';
    currentSection = 'contact';
  }
  changeOptionSelected();
  changeBackground();
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
}

/*function mentors_resize() {
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
}*/

$( window ).scroll(function() {
  displayHeader();
  onchangeSection();
});

$( window ).resize(function() {
  displayHeader();
  /*mentors_resize();*/
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

  $('#services a[href^="#"]').on('click', function(e) {
    var target = $(this.hash);
    if( target.length ) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1500);
    }
  });

  $('#projects a[href^="#"]').on('click', function(e) {
    var target = $(this.hash);
    if( target.length ) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1500);
    }
  });

  $('#faq .questions-list li').hover(
    function() {
      $(this).find('.collapse').collapse('show');
    }, function() {
      $(this).find('.collapse').collapse('hide');
    }
  );

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
          $('#contact-form textarea').val('');
        }

        $('#response').empty().html(response.html);
      }
    });
    return false;
  });

  $("#contact-submit2").on('click',function() {
    var $contact_form = $('#contact-form2');
    var fields = $contact_form.serialize();

    $.ajax({
      type: "POST",
      url: "php/contact.php",
      data: fields,
      dataType: 'json',
      success: function(response) {

        if(response.status){
          $('#contact-form2 input').val('');
          $('#contact-form2 textarea').val('');
        }

        $('#response2').empty().html(response.html);
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
  /*mentors_resize();*/

});
