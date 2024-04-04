const dog = document.querySelector('.icon')

let isPulse = false;
let isRotate = false;

const interval = setInterval(() => {
    isPulse = !isPulse

    if (isPulse) {
        dog.classList.add('pulse')
    }
    else {
        isRotate = !isRotate

        dog.classList.remove('pulse')

        if (isRotate) {
            dog.classList.add('rotate')
        }
        else {
            dog.classList.remove('rotate')
        }
    }
}, 500)