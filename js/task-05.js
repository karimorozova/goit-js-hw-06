/*

Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет 
его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 
"Anonymous"

*/

const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),

}

refs.nameInput.addEventListener('input', onInput);

function onInput(event) {

     refs.nameOutput.textContent = refs.nameInput.value ? refs.nameInput.value : "Anonymous";
    // if(refs.nameInput.value) {
    //     refs.nameOutput.textContent = refs.nameInput.value;
    // } else {
    // refs.nameOutput.textContent = "Anonymous";
    // }
    
}