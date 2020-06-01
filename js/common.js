$('.long-search-toggle .search-button-main').click(function() {
  $('.main-search.orange-border').show();
  $('.main-top-nav__list.long-search-toggle').hide();
});

$('.search-button').click(function() {
  $('.is-sticky .main-search').show();
  $('.is-sticky .main-top-nav__list').hide();
});


$('.nav-menu-close').click(function() {
  $('.main-search').hide();
  $('.main-top-nav__list').show();
});

$(document).ready(function() {

  // Custom 
  var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
    var stickyHeight = sticky.outerHeight();
    var stickyTop = stickyWrapper.offset().top;
    if (scrollElement.scrollTop() >= stickyTop){
      stickyWrapper.height(stickyHeight);
      sticky.addClass("is-sticky");
    }
    else{
      sticky.removeClass("is-sticky");
      stickyWrapper.height('auto');
    }
  };
  
  // Find all data-toggle="sticky-onscroll" elements
  $('[data-toggle="sticky-onscroll"]').each(function() {
    var sticky = $(this);
    var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
    sticky.before(stickyWrapper);
    sticky.addClass('sticky');
    
    // Scroll & resize events
    $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
      stickyToggle(sticky, stickyWrapper, $(this));
    });
    
    // On page load
    stickyToggle(sticky, stickyWrapper, $(window));
  });
});


 
 $('.single-item').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     fade: true,
     asNavFor: '.slider-nav'
 });
 $('.slider-nav').slick({
     slidesToShow: 4,
     infinite: false,
     slidesToScroll: 1,
     asNavFor: '.single-item',
     dots: false,
     arrows: false,
     focusOnSelect: true,
     variableWidth: true,
     responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false,
            dots: false,
            swipeToSlide: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true
          }
        }
      ]
 });

 $('.all-product-item-slider').slick({
    slidesToShow: 1,
    infinite: false,
    arrows: false,
 });
 $('.products-sale-slider').slick({
  slidesToShow: 1,
  infinite: false,
  arrows: false,
});


$(".dropdown-menu .okmr-city").bind('click', function(e){
  e.preventDefault();
  $('body,html').animate({scrollTop: 0}, 300);    
});





function Z() {
  var e = document.body,
      t = e.querySelectorAll("[data-modal]"),
      n = !0,
      r = !1,
      i = void 0;
  try {
      for (var o, a = function () {
              var t = o.value,
                  n = t.dataset.modal;
              (n = document.querySelector(n)) && t.addEventListener("click", (function () {
                  ! function (t) {
                      if (t.classList.contains("c-modal--open")) {
                          var n = function (e) {
                              var t = 1 * window.getComputedStyle(e).transitionDuration.replace(/[^.\d]+/g, "");
                              return (0 ^ t) !== t ? 1e3 * t : t
                          }(t);
                          t.classList.remove("c-modal--open"), setTimeout((function () {
                              e.style.paddingRight = "", e.style.overflow = "", t.style.display = ""
                          }), n)
                      } else { t.style.display = "flex", setTimeout((function () {
                              t.classList.add("c-modal--open")
                          }), 100)
                      }
                  }(n)
              }))
          }, s = t[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) a()
  } catch (e) {
      r = !0, i = e
  } finally {
      try {
          n || null == s.return || s.return()
      } finally {
          if (r) throw i
      }
  }
}

document.addEventListener("DOMContentLoaded", (function () {
Z();
}))