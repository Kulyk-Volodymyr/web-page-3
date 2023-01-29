let imgAreas = document.getElementsByClassName('s-4-img-area');
let imgZoom = document.querySelector('.s-4-2 img');

for (i of imgAreas) {
    i.addEventListener('click', zoomImage);
}

function zoomImage() {
    let areaLeft = parseInt(this.style.left);
    let areaWidth = parseInt(this.style.width);
    let areaTop = parseInt(this.style.top);
    let areaHeight = parseInt(this.style.height);
    let scale = 100 / areaWidth;
    let zoomXposition = ((areaLeft + (areaWidth / 2)) -50) * scale * -1;
    let zoomYposition = ((areaTop + (areaHeight / 2)) -50) * scale * -1;

    imgZoom.style.transform = `translate(${zoomXposition}%, ${zoomYposition}%) scale(${scale})`;
    for (i of imgAreas) i.classList.remove('s-4-img-area-active');
    this.classList.add('s-4-img-area-active');
}
