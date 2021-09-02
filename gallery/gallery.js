/*
1 основное. Доработать функцию замены картинки в галерее таким образом,
 чтобы она проверяла наличие картинки по указанному в src адресу.

 */

const previewImages = document.getElementsByClassName("preview");
const bigImageWrapper = document.querySelector(".central-slide");
const previewImagesWrapper = document.querySelector(".preview-slides");

const setUpNewBigImages = (smallImageSrc) => {
    const bigImageSrc = smallImageSrc.replace("_small.jpg", "_big.jpg");
    isImageExist(bigImageSrc);
    const newBigImage = document.createElement("img");
    newBigImage.src = bigImageSrc;
    bigImageWrapper.innerHTML = "";
    bigImageWrapper.appendChild(newBigImage);
};

const setUpNewActivePreviewImage = (event) => {
    const activePreviewImage = document.querySelector(
        ".preview-slides .active"
    );
    activePreviewImage.classList.remove("active");

    event.target.parentElement.classList.add("active");
};

const galleryHandler = (event) => {
    if (event.target === event.currentTarget) return;

    setUpNewBigImages(event.target.src);
    setUpNewActivePreviewImage(event);
};

previewImagesWrapper.addEventListener("click", galleryHandler);

//===============HW=======================
const isImageExist = (imageSrc) => {
    const image = new Image();
    image.src = imageSrc;

    image.onload = function () {
        console.log("картинка существует");
    };
    image.onerror = function () {
        alert("картинка не существует");
    };
};
