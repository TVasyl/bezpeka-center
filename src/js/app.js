"use strict";

import * as flsFunctions from "./modules/functions.js";
import {
    swiperService,
    swiperWork,
    swiperVideo,
    brandSwiper,
} from "./modules/swipers.js";
import { animOnScroll } from "./modules/animations.js";
import { messageEvent } from "./modules/messageevent.js";
import { showExemple } from "./modules/video.exemple.js";
import { createPopup } from "./modules/create.poup.js";

const videoPlace = document.querySelector(".security-example");

if (videoPlace) {
    console.log("videoPlace");
    videoPlace.addEventListener("click", showPopup);
}

function showPopup(e) {
    e.preventDefault();

    if (e.target.closest(".item-security-example__image")) {
        const element = e.target;
        const src = element.getAttribute("src");

        createPopup(src);

        console.log(element.getAttribute("src"));
    }
}

swiperService();
swiperWork();
swiperVideo();
brandSwiper();

// console.log(window.location);

switch (window.location.pathname) {
    case "/video-service.html":
        showExemple("video");
        break;
    case "/protection-service.html":
        showExemple("protection");
        break;
    default:
        break;
}
// console.log(window.location.pathname);
// if (videoPlace) {
//   showVideoExemple();
// }

const menuItem = document.querySelectorAll(".menu__item");

menuItem.forEach((item) => item.addEventListener("click", menuHandler));

function menuHandler() {
    menuItem.forEach((item) => item.classList.remove("_menu-active"));

    if (!this.classList.contains("_menu-active")) {
        this.classList.add("_menu-active");
    } else {
        this.classList.remove("_menu-active");
    }

    if (document.documentElement.classList.contains("menu-open")) {
        document.documentElement.classList.remove("menu-open");
    }
}

/**
 * Add input mask like phone number to all tel-input
 */
const phoneInput = document.querySelectorAll("input[type=tel]");

phoneInput.forEach((inp) => {
    inp.addEventListener("input", function (e) {
        var x = e.target.value
            .replace(/\D/g, "")
            .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        e.target.value = !x[2]
            ? x[1]
            : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
    });
});

/**
 * Send message after click on the button
 */
const orderButton = document.querySelectorAll(".form-order__button");
orderButton.forEach((btn) => {
    btn.addEventListener("click", messageEvent);
});

// Show hidden menu of burger
document.addEventListener("click", handlerMenu);

function handlerMenu(e) {
    const targetItem = e.target;

    if (targetItem.closest(".icon-menu")) {
        // console.log(targetItem);
        document.documentElement.classList.toggle("menu-open");
    }
}

// const buttonMenu = document.querySelectorAll('.menu__item');

// buttonMenu.forEach(tbn => {
//   tbn.addEventListener('click', () => {
//     if (document.documentElement.classList.contains('menu-open')) {
//       document.documentElement.classList.remove('menu-open');
//     };
//   })
// });

// Sow form for feedback call //
const callMeBtn = document.querySelector(".call-me");
const callMeForm = document.querySelector(".page__feedback");

// callMeBtn.addEventListener("click", () => {
//   callMeForm.classList.toggle("show-form");
// });

// Show text on the service items //
const itemService = document.querySelector(".service__items");

if (itemService) {
    itemService.addEventListener("click", (e) => {
        if (e.target.classList.contains("chevron")) {
            e.target
                .closest(".item-service__about")
                .classList.toggle("show-text");
            e.target
                .closest(".item-service__open")
                .classList.toggle("chevron_rotate");
        }
    });
}

// const itemService = document.querySelector(".item-service__about");

// if (itemService) {
//   itemService.addEventListener("click", (e) => {

//     if (e.target.closest("item-service__about") || e.target.classList.contains("item-service__title") || e.target.classList.contains("item-service__text")) {
//       e.target.closest('.item-service__about').classList.toggle("show-text");
//       e.target.closest(".item-service__open").classList.toggle("chevron_rotate");
//     }

//       if (e.target.classList.contains("item-service__about")) {
//         e.target.closest('.item-service__about').classList.toggle("show-text");
//         e.target.closest(".item-service__open").classList.toggle("chevron_rotate");
//       }
//     }
//   );
// }

flsFunctions.isWebp();

/**
 * Set animation
 */
setTimeout(() => {
    animOnScroll();
}, 0);
