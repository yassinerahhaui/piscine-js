let circles = [];
let box;
let inTheBox = false;

const createCircle = (e) => {
    let x, y;
    if (e) {
        x = e.clientX - 25;
        y = e.clientY - 25;
    }
    const circle = document.createElement('div');
    circle.style.position = 'absolute';
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    inTheBox ? circle.style.background = 'var(--purple)' : 
        circle.style.background = 'white';

    circle.classList.add('circle');
    document.body.appendChild(circle);
    circles.push(circle);
    inTheBox = false;
}
const moveCircle = (e) => {
    if (circles.length === 0) return;
    let lastCircle = circles[circles.length - 1];
    let x, y;
    if (e) {
        x = e.clientX - 25;
        y = e.clientY - 25;
    }
    let boxRect = box.getBoundingClientRect();

    if (inTheBox) {
        let constrainedX = Math.max(boxRect.left, Math.min(x, boxRect.right - lastCircle.offsetWidth));
        let constrainedY = Math.max(boxRect.top, Math.min(y, boxRect.bottom - lastCircle.offsetHeight));
        lastCircle.style.background = 'var(--purple)';
        lastCircle.style.left = `${constrainedX}px`;
        lastCircle.style.top = `${constrainedY}px`;
    } else {
        lastCircle.style.left = `${x}px`;
        lastCircle.style.top = `${y}px`;
        if (
            x >= boxRect.left &&
            x + lastCircle.offsetWidth <= boxRect.right &&
            y >= boxRect.top &&
            y + lastCircle.offsetHeight <= boxRect.bottom
        ) {
            inTheBox = true;
        }
    }
}
const setBox = () => {
    box = document.createElement('div');
    box.classList.add('box');
    box.style.position = 'relative';
    document.body.appendChild(box);
}
window.addEventListener('click', (e) => createCircle(e));
window.addEventListener('mousemove', (e) => moveCircle(e));

export { createCircle, moveCircle, setBox };