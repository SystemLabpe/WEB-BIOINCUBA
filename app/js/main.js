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

var mentors_slider = $('.mentors-slider').bxSlider({
  slideWidth: 220,
  minSlides: 1,
  maxSlides: 5,
  moveSlides: 1,
  slideMargin: 10
});

var fixed_menu_active = false;

function changeBackground(c){
  main.removeClass();
  main.attr('class',c);
}

function changeOptionSelected(){
  $('#menu nav>ul>li>a').removeClass('option-selected');
  $('#menu nav ul li a[href="#'+currentCls+'"]').addClass('option-selected');
}

function isScrolledIntoView(c) {
  var e = $(window).scrollTop();
  var d = e + $(window).height();
  var a = $(c).offset().top;
  return ((a <= d) && (a >= e));
}

function isScrolledIntoTopView(c) {
  var w_scrl_top = $(window).scrollTop();
  var e_offset   = $(c).offset().top;
  var e_height   = $(c).height();
  /*console.log(e_offset);
  console.log(e_height);
  console.log(w_scrl_top);
  console.log("");*/
  return (e_offset + e_height >= w_scrl_top);
}

function checkActive(a) {
  /*console.log("");
  console.log(a);
  console.log(currentCls);
  console.log(previousCls);*/
  var c = a.data('class');
  if (c !== currentCls && isScrolledIntoView(a)) {
    changeBackground(c);
    currentCls = c;
  }
  //console.log($(a).height());
  if(isScrolledIntoTopView(a)){
    changeOptionSelected();
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
  if($(window).scrollTop()>=$('#home-content').position().top){
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

  $('#menu nav ul li a[href^="#"]').on('click', function(e) {
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

  $("#contact-submit").on('click',function() {
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

  // quicksand
  var $filterType = $('#filterOptions li.active a').attr('class');

  var $holder = $('#project-list');

  var $data = $holder.clone();

  $('#filterOptions li a').click(function(e) {

    $('#filterOptions li').removeClass('active');

    var $filterType = $(this).attr('class');
    $(this).parent().addClass('active');

    if ($filterType == 'todos') {
      var $filteredData = $data.find('article');
    }
    else {
      var $filteredData = $data.find('article[data-type=' + $filterType + ']');
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
