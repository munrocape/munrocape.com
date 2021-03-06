$(document).ready(function() {

  // Variables
  var $nav = $('.navbar'),
      $body = $('body'),
      $window = $(window),
      navOffsetTop = $nav.offset().top,
      $document = $(document)

  function init() {
    $window.on('scroll', onScroll);
    $window.on('resize', resize);
    $('a[href^="#"]').on('click', smoothScroll);
    if ($window.width() > 860) {
      $('a.jsj').judy();
    }
  }

  function smoothScroll(e) {
    e.preventDefault();
    $(document).off("scroll");
    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top-40
    }, 0, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
    });
  }

  $("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#elementtoScrollToID").offset().top
    }, 2000);
  });

  function resize() {
    $body.removeClass('has-docked-nav')
    navOffsetTop = $nav.offset().top
    onScroll()
  }

  function onScroll() {
    if(navOffsetTop < $window.scrollTop() && !$body.hasClass('has-docked-nav')) {
      $body.addClass('has-docked-nav');
      $('#projects-nav').removeClass('hidden-name-offset-about');
      $('#name').removeClass('hide-navbar-name');
      $('#name').addClass('navbar-name-offset');
    }
    if(navOffsetTop > $window.scrollTop() && $body.hasClass('has-docked-nav')) {
      $body.removeClass('has-docked-nav');
      $('#name').removeClass('navbar-name-offset');
      $('#name').addClass('hide-navbar-name');
      $('#projects-nav').addClass('hidden-name-offset-about');

    }
  }

  init();
});