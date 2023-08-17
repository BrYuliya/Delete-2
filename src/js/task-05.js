// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
}; 

let anonymous = "Anonymous";

refs.span.textContent = anonymous;
refs.input.addEventListener("input", onImputChange);

function onImputChange(event) {
    refs.span.textContent = event.target.value || anonymous; // тернарний оператор
}


