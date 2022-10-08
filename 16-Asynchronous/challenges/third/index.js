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

// loadNPause()

const loadAll = async (imgArr) => {
    try {
        const promises = imgArr.map(createImage);
        const data = await Promise.all(promises);
        data.forEach(img => img.classList.add("parallel"))
    } catch (error) {

    }
}

loadAll(
    [
        "https://images.freeimages.com/images/previews/d0f/nuclear-power-plant-1314782.jpg",
        "https://images.freeimages.com/images/previews/e04/yellow-frontal-with-ivy-1228121.jpg",
        "https://images.freeimages.com/variants/wJdG4pYDgnLaJo9m7wy61VPt/b6679d1569eb20491ea73c07cf4bfc2406d426757005363d05f4184a67cad3c1"]
)