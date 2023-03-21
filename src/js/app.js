import * as flsFunctions from "./modules/functions.js";
import {swiper1} from "./modules/swipers.js";

swiper1();

const itemService = document.querySelector(".service__items");

itemService.addEventListener("click", (e) => {
  e.preventDefault();  
  
  if (e.target.classList.contains("chevron")) {
    e.target.closest('.item-service__about').classList.toggle("show-text");
    e.target.closest(".item-service__open").classList.toggle("chevron_rotate");
  }

    if (e.target.classList.contains("item-service__about")) {
      console.log('ok');
      e.target.closest('.item-service__about').classList.toggle("show-text");
      e.target.closest(".item-service__open").classList.toggle("chevron_rotate");
    }
  }
);


flsFunctions.isWebp();