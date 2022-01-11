/* 

Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй 
её значением 0.
Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
Обновляй интерфейс новым значением переменной counterValue

*/

const refs = {
   
    btnDecrement: document.querySelector('[data-action="decrement"]'),
    btnIncrement: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value'),
};

refs.btnDecrement.addEventListener('click', onDecrementBtn);
refs.btnIncrement.addEventListener('click', onIncrementBtn);

// console.log(refs.counter);
// console.log(refs.btnDecrement);
// console.log(refs.btnIncrement);
// console.log(refs.value);

let counterValue = 0;

function onIncrementBtn(event) {
    counterValue += 1;
    refs.value.textContent = counterValue;
};
function onDecrementBtn(event) {
    counterValue -= 1;
    refs.value.textContent = counterValue;
};



