"use strict";

$( window ).scroll(function() {
  if($(this).scrollTop()>=$('#home-content').position().top){
      //alert($(this).scrollTop()+" "+$('#home-content').position().top);
    }
});

var mentors_slider = $('.mentors-slider').bxSlider({
  slideWidth: 220,
  minSlides: 1,
  maxSlides: 5,
  moveSlides: 1,
  slideMargin: 10
});

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

  mentors_resize();



});
