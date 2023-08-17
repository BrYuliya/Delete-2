const validInput = document.querySelector('#validation-input');
const validLength = validInput.dataset.length;
validInput.addEventListener('blur', onBlur);

function onBlur(event) {
    if (event.currentTarget.value.length === Number(validLength)) {
        validInput.style.borderColor = "#4caf50";
        return;
    } validInput.style.borderColor = "#f44336";
}

console.log(validInput);