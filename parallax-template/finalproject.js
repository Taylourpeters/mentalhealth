$( document ).ready(function() {
    console.log( "ready!" );

$("#download-button").click(function() {
  $('html,body').animate({
    scrollTop: $("#middle").offset().top},
    'slow');
  });
});



