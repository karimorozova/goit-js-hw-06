/*

Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на 
button.change-color и выводит значение цвета в span.color
*/

const refs = {

  button: document.querySelector('.change-color'),
  colorName: document.querySelector('.color'),

}

refs.button.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  
  document.body.style.backgroundColor = getRandomHexColor();
  refs.colorName.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
