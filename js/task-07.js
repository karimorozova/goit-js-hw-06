/* 

Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и
 изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании 
 ползунка будет меняться размер текста.

*/

const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}


refs.input.addEventListener('input', onInputChangeFontSize);

console.log(refs.input.value);

 function onInputChangeFontSize(event) {
    
   
    refs.text.style.fontSize = refs.input.value + 'px';
  

 }