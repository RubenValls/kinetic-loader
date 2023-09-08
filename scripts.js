const firstTriangle = document.querySelector('#box1');
const secondTriangle = document.querySelector('#box2');
let triangleDegrees = 0;


const rotate = (firstElement, secondElement) => {
    triangleDegrees += 180;
    secondElement.style.transform = `rotate(${triangleDegrees}deg)`;
    setTimeout(() => {
        firstElement.style.transform = `rotate(${triangleDegrees}deg)`;
    }, 500);
}

let interval = setInterval(rotate, 1000, firstTriangle, secondTriangle);