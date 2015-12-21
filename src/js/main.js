$(function() {
    console.log( "ready!" );

  $('.slide, .super-late, .left-arrow, .right-arrow').hide();
  $('.welcome-slide').show().click(function(){
    $('.welcome-slide').fadeOut(2000);
    // $('.each-slide').delay(2000).fadeIn(2000);

function slide1Action() {
  $('.slide-1').hide();
  $('.slide-1').delay(2100).fadeIn(6500, "linear").animate({
    opacity: 0.2,
  }, 15000);
  setTimeout(slide2Action, 4200);
};

slide1Action();

function slide2Action() {
  $('.slide-2').hide();
  $('.text-ease-in').hide();
  $('.slide-2').delay(2000).fadeIn(5000).animate({
    opacity: 0.16,
  }, 46000);
  $('.text-ease-in').fadeIn(17000);
  setTimeout(slide3Action, 17000);
}

function slide3Action() {
  $('.slide-3').hide();
  $('.slide-3').delay(2000).fadeIn(6000).animate({
    opacity: 0.2,
  }, 57000);
  setTimeout(slide4Action, 4000);
};

  // $(".right-arrow, .left-arrow").hide();
  // $(".right-arrow, .left-arrow").delay(25000).fadeIn(3000).animate({
  //   opacity: 0,
  // }, 71000);

function slide4Action() {
  $('.slide-4').hide();
  $('.slide-4').delay(2000).fadeIn(3500).animate({
    opacity: 0.2,
  }, 77000);
  $('.right-arrow, .left-arrow').fadeIn(500);
  setTimeout(slide5Action, 9000);
};

function slide5Action() {
  $('.slide-5').hide();
  $('.text-ease-in-2').hide();
  $('.slide-5').delay(2000).fadeIn(2000).animate({
    opacity: 0.2,
  }, 97000);
  $('.text-ease-in').fadeIn(17000);
  $('.right-arrow, .left-arrow').fadeIn(500);
  setTimeout(slide6Action, 9000);
};

function slide6Action() {
  $('.slide-6').hide();
  $('.slide-6').delay(2000).fadeIn(2000).animate({
    opacity: 0.2,
  }, 117000);
  $('.right-arrow, .left-arrow').fadeIn(500);
  setTimeout(slide7Action, 9000);
};

function slide7Action() {
  $('.slide-7').hide();
  $('.slide-7').delay(2000).fadeIn(2000).animate({
    opacity: 0.2,
  }, 137000);
  $('.right-arrow, .left-arrow').fadeIn(500);
  setTimeout(slide8Action, 9000);
};

function slide8Action() {
  $('.slide-8').hide();
  $('.slide-8').delay(2000).fadeIn(2000);
  // $('.right-arrow, .left-arrow').fadeIn(500);
  setTimeout(slideEndAction);
};

function slideEndAction() {
  $('.super-late').hide();
  $('.super-late').delay(1000).fadeIn(8000);
};

});

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        $('.right-arrow, .left-arrow').hide("slow");
        console.log("biatch!");
    }
};




});
