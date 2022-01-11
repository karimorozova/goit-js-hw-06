/* 

Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество символов, то border инпута становится зелёным, если 
неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в 
исходные файлы задания.

*/

const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if(inputRef.value.length >= 6) {
inputRef.classList.add('valid')
    } else {
        inputRef.classList.add('invalid')
    }
}