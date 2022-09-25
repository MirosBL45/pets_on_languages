//set variables
let rightBtn = document.querySelector('#right_btn');
let leftBtn = document.querySelector('#left_btn');
let images = document.querySelectorAll('.slider_images img');
let numberSlide = document.querySelector('#number_slide');

let countImg = 0;


//function for move images right
const moveRight = () => {
    hideImages(images);
    countImg++;

    if (countImg === images.length) {
        countImg = 0
    }

    showImg();
}


//function for move images left
const moveLeft = () => {
    hideImages(images);
    countImg--;

    if (countImg === -1) {
        countImg = images.length - 1;
    }

    showImg();
}


//function for hide images
const hideImages = (el) => {
    el.forEach(img => {
        img.style.display = 'none';
    });
}


//function for display image
const showImg = () => {
    images[countImg].style.display = 'block';

    numberSlide.textContent = countImg + 1;
}


rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft);