const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

let isSmall = false;
const originalWidth = 200;
const originalHeight = 200;
const smallSize = 180;

cookie.addEventListener('click', () => {
    counter.textContent = parseInt(counter.textContent) + 1;
    
    if (isSmall) {
        cookie.style.width = `${originalWidth}px`;
        cookie.style.height = `${originalHeight}px`;
    } else {
        cookie.style.width = `${smallSize}px`;
        cookie.style.height = `${smallSize}px`;
    }
   
    isSmall = !isSmall;
});