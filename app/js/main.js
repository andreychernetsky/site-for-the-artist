const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');
const overlay = document.querySelector('.overlay');

burger.addEventListener('click',()=>{
    menu.classList.add('open');
    overlay.classList.add('open');
});

overlay.addEventListener('click',()=>{
    menu.classList.remove('open');
    overlay.classList.remove('open');
})
///////////////////////////////////////
{
    const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href');

      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
}
/////////////////////////////////////////////////
{
  function trakScroll() {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;

    if(scrolled > coords) {
        goToBtn.classList.add('topButton__show');
    }
    if(scrolled<coords) {
        goToBtn.classList.remove('topButton__show');
    }
}
function backTotop() {
    if(window.pageYOffset>0) {
        window.scrollBy(0,-80);
        setTimeout( backTotop,0);
    }
}
const goToBtn = document.querySelector('.topButton');
window.addEventListener('scroll', trakScroll);
goToBtn.addEventListener('click', backTotop);
}


///////////////////////////////
{
  const accButton = document.querySelectorAll('.accordion__button');
  accButton.forEach(btn => btn.addEventListener('click',()=>{
    const openButton = btn.nextElementSibling.classList.contains('accordion__panel--open');
    if(openButton) {
      closeAcc(btn.nextElementSibling);
    } else {
      accButton.forEach(x=>closeAcc(x.nextElementSibling));
      openAcc(btn.nextElementSibling);
    }
  }))

  function openAcc(item) {
    item.classList.add('accordion__panel--open');
    item.style.maxHeight = item.scrollHeight+'px';
    item.style.padding = '1rem 1.5rem 1rem 1.5rem'
  }

  function closeAcc(item) {
    item.classList.remove('accordion__panel--open');
    item.style.maxHeight = '0';
    item.style.padding = '0 1.5rem 0 1.5rem';
  }


}