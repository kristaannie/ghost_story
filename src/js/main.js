$(function() {
    console.log( "ready!" );

  // $('.slides').slick({
  //  fade: true,
  //  speed: 4000,
  //  dots: true,
  //  arrows: false,
  //  accessibility: true
  // });


  // $('.text-ease-in').keypress(function(){
  //   console.log("it works!");
  // });

  $('.each-slide').hide();
  $('.welcome-slide').show().click(function(){
    $('.welcome-slide').fadeOut(2000);
    $('.each-slide').delay(2000).fadeIn(2000);
  });

  $('.slide-1').hide();
  $('.slide-1').delay(5500).fadeIn(4000).animate({
    opacity: 0.2,
  }, 15000, function() {
    // Animation complete.
  });


  $('.slide-2').hide();
  $('.slide-2').delay(15500).fadeIn(5000).animate({
    opacity: 0.2,
  }, 46000, function() {
    // Animation complete.
  });

  $('.slide-3').hide();
  $('.slide-3').delay(47000).fadeIn(3000).animate({
    opacity: 0.2,
  }, 57000, function() {
    // Animation complete.
  });

  $('.slide-4').hide();
  $('.slide-4').delay(57000).fadeIn(3500).animate({
    opacity: 0.2,
  }, 77000, function() {
    // Animation complete.
  });

  $('.slide-5').hide();
  $('.slide-5').delay(77000).fadeIn(2000).animate({
    opacity: 0.2,
  }, 97000, function() {
    // Animation complete.
  });

  $('.slide-6').hide();
  $('.slide-6').delay(97000).fadeIn(2000).animate({
    opacity: 0.2,
  }, 117000, function() {
    // Animation complete.
  });

  $('.slide-7').hide();
  $('.slide-7').delay(117000).fadeIn(2000).animate({
    opacity: 0.2,
  }, 137000, function() {
    // Animation complete.
  });

  $('.slide-8').hide();
  $('.slide-8').delay(137000).fadeIn(2000);

  $('.super-late').hide();
  $('.super-late').delay(137000).fadeIn(2500);



});
