const paraData = document.querySelector('.number');
const increment = document.querySelector('.increment');
const decrement = document.querySelector('.decrement');
const reset = document.querySelector('.reset');

let count = 0;
increment.addEventListener('click', () => {
    count++;
    if (count > 0) {
        paraData.className = 'green';
    }
    paraData.innerHTML = count;
});

decrement.addEventListener('click', () => {
    count--;
    if (count < 0) {
        paraData.className = 'red';
    }
    paraData.innerHTML = count;
});

reset.addEventListener('click', () => {
    count = 0;
    if (count == 0) {
        paraData.className = 'black';
    }
    paraData.innerHTML = count;
});