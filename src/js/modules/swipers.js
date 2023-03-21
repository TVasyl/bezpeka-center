import Swiper, { Navigation, Pagination } from 'swiper';

export function swiper1 () {new Swiper('.service__items',{
    // speed: 100,
    // loop:true,
    spaceBetween: 50,
    autoHeight: true,
    // effect: 'flip',
    modules: [ Navigation, Pagination ],
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
    slidesPerView: 4,
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      319.98: {
        slidesPerView: 1
      },
      635: {
        slidesPerView: 2
      },
      930: {
        slidesPerView: 3
      },
      1225: {
        slidesPerView: 4
      },
      // 319.98: {
      //   slidesPerView: 1
      // },
      // 479.98: {
      //   slidesPerView: 2
      // },
      // 767.98: {
      //   slidesPerView: 3
      // },
      // 991.98: {
      //   slidesPerView: 4
      // },
    }
  })
}
