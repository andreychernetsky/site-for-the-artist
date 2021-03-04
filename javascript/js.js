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
    item.style.padding = '1rem auto'
  }

  function closeAcc(item) {
    item.classList.remove('accordion__panel--open');
    item.style.maxHeight = '0';
    item.style.padding = '0 1.5rem 0 1.5rem';
  }


  const menu = document.querySelector('.nav');
  const burger = document.querySelector('.burger');
  const overlay = document.querySelector('.overlay');

  burger.addEventListener('click', ()=>{
    menu.classList.add('open');
    overlay.classList.add('open');
  
  });

  overlay.addEventListener('click',()=>{
    menu.classList.remove('open');
    overlay.classList.remove('open');
   
  })

}
// прокрутка по якорям

  {
    const anchors = document.querySelectorAll("[href*='#']");
    for(let anchor of anchors) {
      anchor.addEventListener('click',(e)=>{
        e.preventDefault;
        const blockid = anchor.getAttribute('href')
       document.querySelector('',blockid).scrollIntoView({
         behavior:'smooth',
         block:'start'
       })
      })
    }
    
  }

  // скролл по кнопке
  {
    function trackScroll() {
      let scrolled = window.pageXOffset
      let coords = document.documentElement.clientHeight;

      if(scrolled > coords) {
        goTopBtn.classList.add('topButton__show');
      }
      if(scrolled < coords) {
        goTopBtn.classList.remove('topButton__show')
      }
    }

    function backToTop() {
      if(window.pageYOffset > 0) {
        window.scrollBy(0,-80);
        setTimeout(backToTop, 0);
      }
    }

    let goTopBtn = document.querySelector('.topButton');
    window.addEventListener('scroll',trackScroll);
    goTopBtn.addEventListener('click',backToTop);
  }