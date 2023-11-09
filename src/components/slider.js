import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperNext = document.getElementById('swiperNext');

export const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '</span>';
      },
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });


  // swiperNext.addEventListener('click', () => {
  //   swiper.slideNext();
  // })