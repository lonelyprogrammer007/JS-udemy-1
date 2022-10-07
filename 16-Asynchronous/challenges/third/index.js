'use strict';

const imagesContainer = document.querySelector(".images");
let gImg;

const createImage = (imgPath) => {
    return new Promise((resolve, reject) => {
        const img = document.createElement("img");
        img.src = imgPath;
        img.addEventListener("load", () => {
            imagesContainer.append(img);
            resolve(img);
        });
        img.addEventListener("error", () =>
            reject(new Error("Image not found"))
        );
    })
}

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

// createImage("./img/img-1.jpg")
//     .then((img) => {
//         gImg = img;
//         return wait(2)
//     })
//     .then(() => {
//         gImg.classList.add("hidden")
//         return createImage("./img/img-2.jpg")
//     })
//     .then((img) => {
//         gImg = img;
//         return wait(2)
//     })
//     .then(() => {
//         gImg.classList.add("hidden")
//     })
//     .catch(msg => console.log(msg))

const loadNPause = async () => {
    try {
        const img = await createImage("./img/img-1.jpg");
        gImg = img;
        await wait(2)
        gImg.classList.add("hidden");
        const img2 = await createImage("./img/img-2.jpg");
        gImg = img2;
        await wait(2)
        gImg.classList.add("hidden");
    } catch (error) {

    }
}

loadNPause()