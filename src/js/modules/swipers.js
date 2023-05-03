import Swiper, { Navigation, Pagination, Autoplay } from "swiper";

export function swiperService() {
    new Swiper(".service__items", {
        // speed: 100,
        // loop:true,
        spaceBetween: 50,
        // autoHeight: true,
        // effect: 'flip',
        modules: [Navigation, Pagination],
        navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        slidesPerView: 4,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            319.98: {
                slidesPerView: 1,
            },
            635: {
                slidesPerView: 2,
            },
            930: {
                slidesPerView: 3,
            },
            1225: {
                slidesPerView: 4,
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
        },
    });
}
export function swiperWork() {
    new Swiper(".work__swiper", {
        // speed: 100,
        loop: true,
        // spaceBetween: 50,
        // autoHeight: true,
        // effect: 'flip',
        modules: [Navigation, Pagination],
        navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        // slidesPerView: 4,
        // breakpoints: {
        //   0: {
        //     slidesPerView: 1
        //   },
        //   319.98: {
        //     slidesPerView: 1
        //   },
        //   635: {
        //     slidesPerView: 2
        //   },
        //   930: {
        //     slidesPerView: 3
        //   },
        //   1225: {
        //     slidesPerView: 4
        //   },
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
        // }
    });
}

export function swiperVideo() {
    new Swiper(".video__swiper", {
        // speed: 100,
        // loop:true,
        spaceBetween: 50,
        // autoHeight: true,
        // effect: 'flip',
        modules: [Navigation, Pagination],
        navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        slidesPerView: 4,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            319.98: {
                slidesPerView: 1,
            },
            635: {
                slidesPerView: 2,
            },
            930: {
                slidesPerView: 3,
            },
            // 1225: {
            //   slidesPerView: 3
            // },
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
        },
    });
}
export function brandSwiper() {
    new Swiper(".brand__swiper", {
        modules: [Autoplay],
        // speed: 100,
        autoplay: {
            autoplay: {
                delay: 5000,
            },
        },
        loop: true,
        spaceBetween: 70,

        // slidesPerView: 4,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            319.98: {
                slidesPerView: 1,
            },
            635: {
                slidesPerView: 2,
            },
            930: {
                slidesPerView: 3,
            },
            1225: {
                slidesPerView: 4,
            },
        },
    });
}
