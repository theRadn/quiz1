const container = document.getElementById("cards-container");

let isDown = false;
let startX;
let scrollLeft;

container.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

container.addEventListener("mouseleave", () => {
    isDown = false;
});

container.addEventListener("mouseup", () => {
    isDown = false;
});

container.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
});

let startTouchX = 0;
container.addEventListener("touchstart", (e) => {
    startTouchX = e.touches[0].pageX;
});

container.addEventListener("touchmove", (e) => {
    const moveX = e.touches[0].pageX - startTouchX;
    container.scrollLeft -= moveX;
    startTouchX = e.touches[0].pageX;
});