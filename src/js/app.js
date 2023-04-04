import * as flsFunctions from "./modules/functions.js";
import {swiperService, swiperWork, swiperVideo, brandSwiper} from "./modules/swipers.js";
import { animOnScroll } from "./modules/animations.js";

swiperService();
swiperWork();
swiperVideo();
brandSwiper();


/**
 * Add input mask like phone number to all tel-input
 */
const telSelector = document.querySelectorAll('.tel');
const inputMask = new Inputmask('+38 (999) 999-99-99');
telSelector.forEach(inp => inputMask.mask(inp));



const orderButton = document.querySelectorAll('.form-order__button');

// Show hidden menu of burger
document.addEventListener('click', handlerMenu);

function handlerMenu(e) {
    const targetItem = e.target;

    if (targetItem.closest('.icon-menu')) {
        console.log(targetItem);
        document.documentElement.classList.toggle('menu-open');
    }
}



// Sow form for feedback call //
const callMeBtn = document.querySelector(".call-me");
const callMeForm = document.querySelector(".page__feedback");


callMeBtn.addEventListener("click", () => {
  callMeForm.classList.toggle("show-form");
});



// Show text on the service items //
const itemService = document.querySelector(".service__items");

itemService.addEventListener("click", (e) => {
  e.preventDefault();  
  
  if (e.target.classList.contains("chevron")) {
    e.target.closest('.item-service__about').classList.toggle("show-text");
    e.target.closest(".item-service__open").classList.toggle("chevron_rotate");
  }

    if (e.target.classList.contains("item-service__about")) {
      e.target.closest('.item-service__about').classList.toggle("show-text");
      e.target.closest(".item-service__open").classList.toggle("chevron_rotate");
    }
  }
);

flsFunctions.isWebp();


/**
 * Set animation
 */
  setTimeout(() => {
    animOnScroll();    
  }, 0);




orderButton.forEach(btn => {
  console.log('+');
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const formData = new FormData(e.target.closest('.form-order'));
    console.log(Object.fromEntries( formData));
  })
});