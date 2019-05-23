$(document).ready(function(){
  $('.card__header').click (function(){
    $(this).next().slideToggle(500);
    if($(this).find('.card__button .fa-angle-down').css('display') == 'none') {
      $(this).find('.card__button .fa-angle-down').css('display','block');
      $(this).find('.card__button .fa-angle-up').css('display','none');
    } else {
      $(this).find('.card__button .fa-angle-down').css('display','none');
      $(this).find('.card__button .fa-angle-up').css('display','block');
    }
  })
});
