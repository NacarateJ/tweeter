// Ensure the web page is loaded:
$(document).ready(() => {
  // Find the elements in the DOM
  const $upBut = $(".up-but"); 
  const $navRight = $(".nav-right");
  const $newTweet = $(".new-tweet");

  $(window).scroll(function() {
    // Retrieve the vertical scroll position of the window
    if ($(this).scrollTop() > 0) {
      $upBut.fadeIn();
      $navRight.fadeOut();
    } else {
      $upBut.fadeOut();
      $navRight.fadeIn();
    }
  });

  $upBut.on("click", function(event) {
    // Prevent the default behaviour for the button click
    event.preventDefault();

    // Scroll to the top of the page
    $("html, body").animate({ scrollTop: 0 }, "slow", function() {
      // Show new tweet form
      $newTweet.slideDown();
    });
  });
});