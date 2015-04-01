"use strict";

$(window).on('load',function(){

  $('#toggle').on('click', function(e){
    $(this).toggleClass('open');

    if ($('#toggle').hasClass('open')) {
      $('#menu nav').slideDown(500);
    } else {
      $('#menu nav').slideUp(500, function(){
        $(this).removeAttr('style');
      });
    }

    e.preventDefault();
  });

  /*$('#menu-nav-mobile a').on('click', function(){
    $('#mobile-nav').removeClass('open');
    $('#navigation-mobile').slideUp(350, 'easeOutExpo');
  });*/

});
