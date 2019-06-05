$(function () {

  var header = $("#Header"),
    introH = $("#Intro").innerHeight(),
    scrollOffset = $(window).scrollTop();


  /* Fixed Header */
  checkScroll(scrollOffset);

  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if( scrollOffset >= introH ) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }


  /* Menu nav toggle */
  $("#nav_toggle").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#Nav").toggleClass("active");
  });


});






