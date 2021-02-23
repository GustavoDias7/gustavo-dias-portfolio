// ZOOM IMAGE
const zoomImageContainer = document.querySelector('.zoom-image-container');
const zoomImage = document.querySelector('.zoom-image');
const btnCloseZoomImage = document.querySelector('.btn-close-zoom-image');

document.addEventListener('click', event => {
    if (!event.target.classList.contains('projects-image')) return;
    zoomImageContainer.classList.add('open-zoom-image');
    const mySrc = event.target.currentSrc;
    zoomImage.setAttribute('src', mySrc);
});

btnCloseZoomImage.addEventListener('click', () => {
    zoomImageContainer.classList.remove('open-zoom-image');
});