// import { videoExempleData } from "../data";
import videoExempleData from "../video.data.json";
import protectionExempleData from "../protection.data.json";

const itemPlace = document.querySelector(".security-example__items");

export function showExemple(db) {
    let data = [];

    switch (db) {
        case "video":
            data = videoExempleData ? videoExempleData : false;
            break;
        case "protection":
            data = protectionExempleData ? protectionExempleData : false;
        default:
            break;
    }

    data.map((data) => {
        data ? creareItem(data) : render("error");
    });
}

function creareItem({ id, img, title, cost }) {
    let item = document.createElement("div");

    item.innerHTML = `<div id="${id}" class="security-example__item item-security-example">
                <div class="item-security-example__image">
                    <a href="${img}">
                        <img src="${img}" alt="plan title="Приклад базової моделі відеоспостереження"">
                    </a>
                </div>
                <div class="item-security-example__title">
                    <p>${title}</p>
                </div>
                <div class="item-security-example__price">
                    <span class="lable-price">Від:</span>
                    <div class="item-security-example__price-box">
                        <span class="price">
                            <span class="price-value">${cost}</span>
                            <span class="price-symbol">грн</span>
                        </span>
                    </div>
                </div>
                <button class="item-security-example__button button">Консультація</button>
            </div>`;

    render(item);
}

function render(item) {
    itemPlace.append(item);
}
