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


/**
 * Set animation
 */
let animItems = document.querySelectorAll('._anim-items'); // ._anim-items - клас який необхідно призначати елементам які ви хочете анімувати //

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll)
  
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_anime'); //_anime - клас який викликає початок анімації та повертає елемент у реальну позицію //
      } else {
        // _anim-no-hide - клас яки призначають для елемента анімація якогоне має повторюватись //
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_anime');          
        }
      }
    }
  }
  
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }

  setTimeout(() => {
    animOnScroll();    
  }, 300);
}