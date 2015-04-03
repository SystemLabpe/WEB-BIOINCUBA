"use strict";

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
    $('toggle').removeClass('open');
    $('#menu nav').slideUp(500, function(){
      $(this).removeAttr('style');
    });
  });

});
