 $(function () {

 var header = $("#header"),
    introH = $("#intro").innerHeight(),
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


  // smooth scroll
  $("[data-scroll]").on("click",function(event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $(this).data('scroll');
        blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

       $("html, body").animate({
         scrollTop:blockOffset
       },500);
  });

  // menu nav toggle
  $("#nav_toggle").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });

// collapse
   // smooth scroll
   $("[data-collapse]").on("click", function(event) {
     event.preventDefault();

     var $this = $(this),
       blockId = $this.data('collapse');

     $this.toggleClass("active");
   });

});

 const acc = document.getElementsByClassName("Accordion__button");
let i;
for(i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    panel.style.display == 'block' ?  panel.style.display ='none' :  panel.style.display = 'block';

  });
}






