/**
 * Function for create the popup of image
 * @param {string} src - path to image of popup
 */

export function createPopup(src) {
    const popup = document.querySelector(".popup");
    const div = document.createElement("div");

    const body = `<div class="popup-image__body">
                      <div class="popup-image__image">
                          <div class="popup-image__close" ></div>
                          <img src="${src}" alt="image">
                      </div>
                  </div>`;

    if (popup) {
        popup.classList.add("popup-image");
        popup.innerHTML = body;
    }

    //Event for close popup
    popup.addEventListener("click", (e) => {
        e.preventDefault();

        if (
            e.target.classList.contains("popup-image__close") ||
            e.target.classList.contains("popup-image__body")
        ) {
            console.log("+");
            popup.classList.remove("popup-image");
            popup.innerHTML = "";
        }
    });
}
