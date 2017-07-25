$(function () {
  $(window).on("load resize", function () {
    $(".fill-screen").css("height", window.innerHeight);
  });

  //add bootstrap ScrollSpy
  $('body').scrollspy({
    target: '.navbar',
    offset: 100
  });

  //smooth scrolling
  $('nav a, .down-button a').bind('click', function () {
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  //Initialize WOW for scrolling animation
  new WOW().init();
});
