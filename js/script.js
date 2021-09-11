'use strict';



document.addEventListener('DOMContentLoaded', () => {

  // SCROLL

  const height = document.querySelector('.header').innerHeight +
    document.querySelector('.products').innerHeight +
    document.querySelector('.services').innerHeight +
    document.querySelector('.footer').innerHeight;


  function getBodyScrollTop() {
    return (self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop));
  }

  window.addEventListener('scroll', scrollHeight);

  function scrollHeight() {
    let scrolldarWidh = (getBodyScrollTop() * 100) / (height - document.documentElement.clientHeight);
    let scrollbar = document.querySelector('.scrollbar');
    scrollbar.style.cssText = `width: ${scrolldarWidh}%;`;
  }
  scrollHeight();




  // hoverEfeckt

  const modalTrigger = document.querySelectorAll('.products_item'),
    popUp_bg = document.querySelector(".popUp_bg");

  modalTrigger.forEach(i => {
    i.addEventListener('click', () => {
      popUp_bg.classList.remove('hide');
      popUp_bg.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModall() {
    popUp_bg.classList.add('hide');
    popUp_bg.classList.remove('active');
    document.body.style.overflow = '';
  }

  popUp_bg.addEventListener('click', (e) => {
    if (e.target === popUp_bg) {
      closeModall();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && popUp_bg.classList.contains('active')) {
      closeModall();
    }
  });


});