// import { videoExempleData } from "../data";
// import videoExempleData from "../video.data.json";
// import protectionExempleData from "../protection.data.json";
const videoExempleData = [
    {
        id: "01",
        img: "img/video_service/example-1.jpg",
        title: "Відеонагляд для 1-кімнатної квартири на першому поверсі",
        cost: 7000,
    },
    {
        id: "02",
        img: "img/video_service/example-1.jpg",
        title: "Відеонагляд для 2-кімнатної квартири на першому поверсі",
        cost: 9000,
    },
    {
        id: "03",
        img: "img/video_service/example-1.jpg",
        title: "Відеонагляд для 3-кімнатної квартири на першому поверсі",
        cost: 25000,
    },
    {
        id: "04",
        img: "img/video_service/example-1.jpg",
        title: "Відеонагляд для 4-кімнатної квартири на першому поверсі",
        cost: 7000,
    },
    {
        id: "05",
        img: "img/video_service/example-1.jpg",
        title: "Відеонагляд для 1-кімнатної квартири на першому поверсі",
        cost: 15000,
    },
    {
        id: "06",
        img: "img/video_service/example-1.jpg",
        title: "Відеонагляд для 2-кімнатної квартири на першому поверсі",
        cost: 15600,
    },
    {
        id: "07",
        img: "img/video_service/example-1.jpg",
        title: "Відеонагляд для 3-кімнатної квартири на першому поверсі",
        cost: 12000,
    },
    {
        id: "08",
        img: "img/video_service/example-1.jpg",
        title: "Відеонагляд для 4-кімнатної квартири на першому поверсі",
        cost: 6000,
    },
    {
        id: "09",
        img: "img/video_service/example-1.jpg",
        title: "Відеонагляд для 1-кімнатної квартири на першому поверсі",
        cost: 23500,
    },
];
const protectionExempleData = [
    {
        id: "01",
        img: "img/video_service/example-1.jpg",
        title: "Охоронна система для 1-кімнатної квартири на першому поверсі",
        cost: 7000,
    },
    {
        id: "02",
        img: "img/video_service/example-1.jpg",
        title: "Охоронна система для 1-кімнатної квартири на першому поверсі",
        cost: 9000,
    },
    {
        id: "03",
        img: "img/video_service/example-1.jpg",
        title: "Охоронна система для 1-кімнатної квартири на першому поверсі Охоронна система для 1-кімнатної квартири на першому поверсі",
        cost: 25000,
    },
    {
        id: "04",
        img: "img/video_service/example-1.jpg",
        title: "Охоронна система для 1-кімнатної квартири на першому поверсі",
        cost: 7000,
    },
    {
        id: "05",
        img: "img/video_service/example-1.jpg",
        title: "Охоронна система для 1-кімнатної квартири на першому поверсі",
        cost: 15000,
    },
    {
        id: "06",
        img: "img/video_service/example-1.jpg",
        title: "Охоронна система для 1-кімнатної квартири на першому поверсі",
        cost: 15600,
    },
    {
        id: "07",
        img: "img/video_service/example-1.jpg",
        title: "Охоронна система для 1-кімнатної квартири на першому поверсі",
        cost: 12000,
    },
    {
        id: "08",
        img: "img/video_service/example-1.jpg",
        title: "Охоронна система для 1-кімнатної квартири на першому поверсі",
        cost: 6000,
    },
    {
        id: "09",
        img: "img/video_service/example-1.jpg",
        title: "Охоронна система для 1-кімнатної квартири на першому поверсі",
        cost: 23500,
    },
];

const itemPlace = document.querySelector(".app-items");

export function showExemple(db) {
    let data = [];

    switch (db) {
        case "video-surveillance":
            data = videoExempleData ? videoExempleData : false;
            // fetch(url, {
            //     method: "POST",
            //     mode: "cors",
            //     cache: "no-cache",
            //     credentials: "same-origin",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     redirect: "follow",
            //     referrerPolicy: "no-referrer",
            //     body: db
            // });
            break;
        case "security-system":
            data = protectionExempleData ? protectionExempleData : false;
            break;
        case "intercom":
            data = protectionExempleData ? protectionExempleData : false;
            break;
        case "gate-automation":
            data = protectionExempleData ? protectionExempleData : false;
            break;
        case "access-control":
            data = protectionExempleData ? protectionExempleData : false;
            break;
        case "fire-alarm":
            data = protectionExempleData ? protectionExempleData : false;
            break;
        case "smart-home":
            data = protectionExempleData ? protectionExempleData : false;
            break;
        default:
            break;
    }

    data.map((data) => {
        data ? createItem(data) : render("error");
    });
}

function createItem({ id, img, title, cost }) {
    let item = document.createElement("div");
    // item.classList.add("app-items");
    const mainClass = "item-app";

    item.innerHTML = `<div id="${id}" class="app-items__item ${mainClass}">
                <div class="${mainClass}__image">
                    <a href="${img}">
                        <img src="${img}" alt="plan" title="Приклад базової моделі відеоспостереження">
                    </a>
                </div>
                <div class="${mainClass}__title">
                    <p>${title}</p>
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
                <button class="${mainClass}__button button">Консультація</button>
            </div>`;

    render(item);
}

function render(item) {
    itemPlace.append(item);
}
