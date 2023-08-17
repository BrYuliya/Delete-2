// const CounterPlagin = function ({ initialValue = 0, step = 1 } = {}) {
//     this._value = initialValue;
// };

// const counter = new CounterPlagin();


// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const btnReduce = document.querySelector('.js-button-reduce');
const btnAdd = document.querySelector('.js-button-add');
const value = document.querySelector("#value");

let counterValue = 0;

function decrement(event) {
    counterValue -= 1;
    value.textContent = counterValue;
};

function increment(event) {
    counterValue += 1;
    value.textContent = counterValue;
};

btnReduce.addEventListener('click', decrement);
btnAdd.addEventListener('click', increment);