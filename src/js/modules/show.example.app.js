// import { urls } from "./configs";

export function showExemple(endpoint, itemPlace) {
    // let goods = [];
    itemPlace = document.querySelector(itemPlace);
    itemPlace.innerHTML = "";

    const getGoods = async (category) => {
        let response = await fetch(
            `https://bezpekaapi.onrender.com/technology?category=${category}`
        );

        const data = await response.json();

        render(data);
    };

    switch (endpoint) {
        case "video-surveillance":
            getGoods(endpoint);
            break;
        case "security-system":
            getGoods(endpoint);
            break;
        case "intercom":
            getGoods(endpoint);
            break;
        case "gate-automation":
            getGoods(endpoint);
            break;
        case "access-control":
            getGoods(endpoint);
            break;
        case "fire-alarm":
            getGoods(endpoint);
            break;
        case "smart-home":
            getGoods(endpoint);
            break;
        default:
            break;
    }

    function render(data) {
        if (data) {
            data.map((item) => {
                let rendererItem = item ? createItem(item) : render("error");
                itemPlace.append(rendererItem);
            });
        }
    }
}

function createItem({ id, img, name, description, cost }) {
    let item = document.createElement("div");
    // item.classList.add("app-items");
    const mainClass = "item-app";

    item.innerHTML = `<div id="${id}" class="app-items__item ${mainClass}">
                <div class="${mainClass}__image">
                    <a href="${img}">
                        <img src="${img}" alt="plan" title="Приклад базової моделі відеоспостереження">
                    </a>
                </div>
                <div class="${mainClass}__body">                
                    <div class="${mainClass}__name">
                        <p>${name}</p>
                    </div>
                    <div class="${mainClass}__description">
                        <p>${description}</p>
                    </div>
                    <div class="${mainClass}__price">
                        <span class="lable-price">Від:</span>
                        <div class="${mainClass}__price-box">
                            <span class="price">
                                <span class="price-value">${cost}</span>
                                <span class="price-symbol">грн</span>
                            </span>
                        </div>
                    </div>
                </div>
                <button class="${mainClass}__button button">Консультація</button>
            </div>`;
    return item;
}
