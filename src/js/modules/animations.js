let animItems = document.querySelectorAll('._anim-items'); // ._anim-items - клас який необхідно призначати елементам які ви хочете анімувати //

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll)
}

export function animOnScroll() {
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