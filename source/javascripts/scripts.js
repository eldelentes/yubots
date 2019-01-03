$('.tabs__nav a').click(function(){
  var currentTab = $(this).data('tab');
  $('.tabs__nav a').removeClass('is-active');
  $(this).addClass('is-active');
  $('.tab').removeClass('is-active');
  $('.tab[data-tab="' + currentTab + '"]').addClass('is-active');
})

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  
  window.onscroll = function() {myFunction()}

  function myFunction() {
    var position = $(window).scrollTop();
    console.log(position);
    if (position > 500) {
      $('.main-header').addClass('is-active');
    } else {
      $('.main-header').removeClass('is-active');
    }
  }