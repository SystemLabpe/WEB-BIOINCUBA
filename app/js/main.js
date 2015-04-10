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

function changeBackground(){
  for (var section in sections) {
    var a = sections[section];
    if (sections.hasOwnProperty(section)) {
      checkActive(a);
    }
  }
}

var mentors_slider = $('.mentors-slider').bxSlider({
  slideWidth: 220,
  minSlides: 1,
  maxSlides: 5,
  moveSlides: 1,
  slideMargin: 10
});

var is_not_home_section = false;

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

function display_header() {
  if($(window).scrollTop()>=$('#home-content').position().top){
    is_not_home_section = true;
    $('#menu').css(
      { "left": "0",
        "top": "0",
        "width": "100%",
        "background": "#ECECEC",
        "color":  "#F8B102",
        "box-shadow": "0 0 0.15em 0 rgba(0,0,0,0.1)",
      }
    );
    $('#logoMenu').css("background-image","url('../img/logo-color250x60.png')");
  }else{
    is_not_home_section = false;
    $('#menu').removeAttr('style');
    if (!($('#logoMenu').css("background-image")==="url('../img/logo-250x60.png')")) {
      $('#logoMenu').css("background-image","url('../img/logo-250x60.png')");
    };
  }
}

$( window ).scroll(function() {
  display_header();
  changeBackground();
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
    if(is_not_home_section){
      $(this).css("border-color","#F8B001");
    }else{
       $(this).css("border-color","");
    }
  },function(){
    $(this).css("border-color","");
  });

  $('#menu nav ul li a').on('click', function(){
    $('#menu nav>ul>li>a').css(
      { "background-color": "",
        "color": "",
      }
    );
    $(this).css(
      { "background-color": "#F8B001",
        "color": "#fff",
      }
    );
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

   $("#project-list").elastic_grid({
            'showAllText' : 'Todos',
            'filterEffect': 'scaleup', // moveup, scaleup, fallperspective, fly, flip, helix , popup
            'hoverDirection': true,
            'hoverDelay': 0,
            'hoverInverse': false,
            'expandingSpeed': 500,
            'expandingHeight': 500,
            'items' :
            [
                {
                    'title'         : 'josue bean',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['img/projects/small/1.jpg', 'img/projects/small/2.jpg', 'img/projects/small/3.jpg', 'img/projects/small/10.jpg', 'img/projects/small/11.jpg'],
                    'large'         : ['img/projects/large/1.jpg', 'img/projects/large/2.jpg', 'img/projects/large/3.jpg', 'img/projects/large/10.jpg', 'img/projects/large/11.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : false}
                    ],
                    'tags'          : ['Pre-Incubacion']
                },
                {
                    'title'         : 'Swiss chard pumpkin',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['img/projects/small/4.jpg', 'img/projects/small/5.jpg', 'img/projects/small/6.jpg', 'img/projects/small/7.jpg'],
                    'large'         : ['img/projects/large/4.jpg', 'img/projects/large/5.jpg', 'img/projects/large/6.jpg', 'img/projects/large/7.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Incubacion']
                },
                {
                    'title'         : 'Spinach winter purslane',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['img/projects/small/15.jpg','img/projects/small/8.jpg', 'img/projects/small/9.jpg', 'img/projects/small/10.jpg'],
                    'large'         : ['img/projects/large/15.jpg','img/projects/large/8.jpg', 'img/projects/large/9.jpg', 'img/projects/large/10.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Aceleracion']
                },
                {
                    'title'         : 'Aubergine napa cabbage',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['img/projects/small/12.jpg', 'img/projects/small/13.jpg', 'img/projects/small/14.jpg', 'img/projects/small/15.jpg', 'img/projects/small/16.jpg'],
                    'large'         : ['img/projects/large/12.jpg', 'img/projects/large/13.jpg', 'img/projects/large/14.jpg', 'img/projects/large/15.jpg', 'img/projects/large/16.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Pre-Incubacion']
                },
                {
                    'title'         : 'Swiss chard pumpkin',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['img/projects/small/17.jpg', 'img/projects/small/18.jpg', 'img/projects/small/19.jpg', 'img/projects/small/20.jpg'],
                    'large'         : ['img/projects/large/17.jpg', 'img/projects/large/18.jpg', 'img/projects/large/19.jpg', 'img/projects/large/20.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Incubacion']
                },
                {
                    'title'         : 'Spinach winter purslane',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['img/projects/small/13.jpg','img/projects/small/15.jpg', 'img/projects/small/11.jpg', 'img/projects/small/10.jpg'],
                    'large'         : ['img/projects/large/13.jpg','img/projects/large/15.jpg', 'img/projects/large/11.jpg', 'img/projects/large/10.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Aceleracion']
                },
                {
                    'title'         : 'Spinach winter purslane',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['img/projects/small/7.jpg','img/projects/small/8.jpg', 'img/projects/small/9.jpg', 'img/projects/small/10.jpg'],
                    'large'         : ['img/projects/large/7.jpg','img/projects/large/8.jpg', 'img/projects/large/9.jpg', 'img/projects/large/10.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Pre-Incubacion']
                },
                {
                    'title'         : 'Azuki bean',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['img/projects/small/16.jpg', 'img/projects/small/13.jpg', 'img/projects/small/14.jpg', 'img/projects/small/15.jpg', 'img/projects/small/16.jpg'],
                    'large'         : ['img/projects/large/16.jpg', 'img/projects/large/13.jpg', 'img/projects/large/14.jpg', 'img/projects/large/15.jpg', 'img/projects/large/16.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Incubacion']
                },
                {
                    'title'         : 'Swiss chard pumpkin',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['img/projects/small/18.jpg', 'img/projects/small/18.jpg', 'img/projects/small/19.jpg', 'img/projects/small/20.jpg'],
                    'large'         : ['img/projects/large/18.jpg', 'img/projects/large/18.jpg', 'img/projects/large/19.jpg', 'img/projects/large/20.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Aceleracion']
                },
                {
                    'title'         : 'Winter purslane',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['img/projects/small/11.jpg','img/projects/small/15.jpg', 'img/projects/small/11.jpg', 'img/projects/small/10.jpg'],
                    'large'         : ['img/projects/large/11.jpg','img/projects/large/15.jpg', 'img/projects/large/11.jpg', 'img/projects/large/10.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Pre-Incubacion']
                },
                {
                    'title'         : 'Spinach winter purslane',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['img/projects/small/3.jpg','img/projects/small/15.jpg', 'img/projects/small/11.jpg', 'img/projects/small/10.jpg'],
                    'large'         : ['img/projects/large/3.jpg','img/projects/large/15.jpg', 'img/projects/large/11.jpg', 'img/projects/large/10.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Incubacion']
                },
                {
                    'title'         : 'Spinach winter purslane',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['img/projects/small/5.jpg','img/projects/small/8.jpg', 'img/projects/small/9.jpg', 'img/projects/small/10.jpg'],
                    'large'         : ['img/projects/large/5.jpg','img/projects/large/8.jpg', 'img/projects/large/9.jpg', 'img/projects/large/10.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Aceleracion']
                },
                {
                    'title'         : 'Azuki bean',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['img/projects/small/6.jpg', 'img/projects/small/13.jpg', 'img/projects/small/14.jpg', 'img/projects/small/15.jpg', 'img/projects/small/16.jpg'],
                    'large'         : ['img/projects/large/6.jpg', 'img/projects/large/13.jpg', 'img/projects/large/14.jpg', 'img/projects/large/15.jpg', 'img/projects/large/16.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Incubacion']
                },
                {
                    'title'         : 'Swiss chard pumpkin',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['img/projects/small/8.jpg', 'img/projects/small/18.jpg', 'img/projects/small/19.jpg', 'img/projects/small/20.jpg'],
                    'large'         : ['img/projects/large/8.jpg', 'img/projects/large/18.jpg', 'img/projects/large/19.jpg', 'img/projects/large/20.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Incubacion']
                },
                {
                    'title'         : 'Spinach winter purslane',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['img/projects/small/9.jpg','img/projects/small/15.jpg', 'img/projects/small/11.jpg', 'img/projects/small/10.jpg'],
                    'large'         : ['img/projects/large/9.jpg','img/projects/large/15.jpg', 'img/projects/large/11.jpg', 'img/projects/large/10.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Incubacion']
                }

            ]
        });

changeBackground();
display_header();
mentors_resize();

});
