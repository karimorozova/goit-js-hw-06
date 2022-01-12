/* 

Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов 
в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку 
Очистить, коллекция элементов очищается.
Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает
 столько <div>, сколько указано в amount и добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию 
getRandomHexColor для получения цвета.
Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все 
созданные элементы.

*/

const refs = {
  input: document.querySelector('input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'),
}

console.log(refs.input);
console.log(refs.btnCreate);
console.log(refs.btnDestroy);
console.log(refs.boxes);

refs.btnCreate.addEventListener('click', onCreateBtnClick);
refs.btnDestroy.addEventListener('click', destroyBoxes);

function onCreateBtnClick(event) {
  
  createBoxes(refs.input.value);
  
};

function createBoxes(amount) {
const arr = [];
let size = 20;
  for(let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');
    size += 10;
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomHexColor();
    arr.push(box);
  }

  refs.boxes.append(...arr)
}


function destroyBoxes() {
  refs.boxes.innerHTML = "";
  refs.input.value = "";
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
