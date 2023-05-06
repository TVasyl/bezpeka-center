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

/**
 * Switch for randerig items in different pages
 */
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

const renderedPlace = document.querySelector(".security-example");

if (renderedPlace) {
    renderedPlace.addEventListener("click", showPopup);
}

/**
 * Function for show popup from items of service example
 * @param {event} e
 */
function showPopup(e) {
    e.preventDefault();

    if (e.target.closest(".item-security-example__image")) {
        const element = e.target;
        const src = element.getAttribute("src");

        createPopup(src);

        console.log(element.getAttribute("src"));
    }
}

/**
 * Functions for setup swipers
 */
swiperService();
swiperWork();
swiperVideo();
brandSwiper();

/**
 *Code for change style of active menu and open burger menu
 */
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

// Show hidden menu of burger
document.addEventListener("click", handlerMenu);

function handlerMenu(e) {
    const targetItem = e.target;

    if (targetItem.closest(".icon-menu")) {
        document.documentElement.classList.toggle("menu-open");
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

// Sow form for feedback call //
const callMeBtn = document.querySelector(".call-me");
const callMeForm = document.querySelector(".page__feedback");

if (callMeBtn) {
    callMeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        callMeForm.classList.toggle("show-form");
    });
}

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

flsFunctions.isWebp();

/**
 * Set animation
 */
setTimeout(() => {
    animOnScroll();
}, 0);
