import * as flsFunctions from "./modules/functions.js";
import {swiper1, swiper2, swiper3} from "./modules/swipers.js";

swiper1();
swiper2();
swiper3();



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