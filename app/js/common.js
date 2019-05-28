$(document).ready(function () {
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
  // открытие поля поиска
  $('.search__btn').click(function () {
    $('.search__input').toggleClass('search__input_open');
    dropdown2.removeClass('dropdown2_open');
    dropdown.removeClass('dropdown_open');
    if ($(window).outerWidth() > 770 && $(window).outerWidth() < 1000) {
      if ($('.search__input').hasClass('search__input_open')) {
        $('.menu-open').css('display', 'block');
        $('.menu_navigation').addClass('menu_navigation_js');
      } else {
        $('.menu-open').css('display', 'none');
        $('.menu_navigation').removeClass('menu_navigation_js');
      }
    }
    if ($(window).outerWidth() < 480) {
      if ($('.search__input').hasClass('search__input_open')) {
        $('.logo').css('display', 'none');
      } else {
        $('.logo').css('display', 'block');
      }
    }
  });
  // выпадающее меню
  var dropdown = $('.dropdown');
  var dropdown2 = $('.dropdown2');
  var dropdownOpen = function dropdownOpen(link, down, classToggle) {
    link.parent().siblings().find(down).removeClass(classToggle);
    if (link.siblings(down).hasClass(classToggle)) {
      link.siblings(down).removeClass(classToggle);
    } else {
      link.siblings(down).addClass(classToggle);
    }
  };
  var documentWidth = $(document).width();
  $('.menu__link_navigation').click(function (e) {
    dropdownOpen($(this), dropdown, 'dropdown_open');
    dropdown2.removeClass('dropdown2_open');
    e.preventDefault();
    var left = $(this).siblings().offset().left;
    var width = $(this).siblings().width();
    var downPosition = left + width;
    var leftPosition = documentWidth - width - 10 - left;
    if (documentWidth < downPosition) {
      $(this).siblings().css('left', leftPosition + 'px');
    }
  });
  $('.dropdown__link').click(function (e) {
    dropdownOpen($(this), dropdown2, 'dropdown2_open');
    e.preventDefault();
    var left = $(this).siblings().offset().left;
    var width = $(this).siblings().width();
    var downPosition = left + width;
    if (documentWidth < downPosition) {
      $(this).siblings().css('left', '-99%');
    }
  });
  // открытие навигационного меню на маленьких экранах
  $('.menu-open').click(function () {
    $('.menu-open__global_top').toggleClass('menu-open__global_top_open');
    $('.menu-open__global_middle').toggleClass('menu-open__global_middle_open');
    $('.menu-open__global_bottom').toggleClass('menu-open__global_bottom_open');
    $('.menu_navigation').toggleClass('menu_navigation_open');
    dropdown.removeClass('dropdown_open');
    dropdown2.removeClass('dropdown2_open');
  });
});
})
;
let acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.lenght; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibiling;
    if (panel.style.display == "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

