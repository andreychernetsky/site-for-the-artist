$(function () {
    let header = $("#Header");
    let introH = $("#Intro").innerHeight();
    let scrollOffset = $(window).scrollTop();

    /* Fixed Header */
    checkScroll(scrollOffset);
    $(window).on("scroll", function () {//скролим и выбираем высоту блока
      scrollOffset = $(this).scrollTop();
      checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
      if (scrollOffset >= introH) {
        header.addClass("fixed");
      } else {
        header.removeClass("fixed");
      }
    }



});