
// 4. Якщо користувач заповнив усі поля і відправив форму, 
// збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, 
// а значення поля - значенням властивості.
// 6. Виведи об'єкт із введеними даними в консоль 
// і очисти значення полів форми методом reset.


const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault(); // щоб сторінка не перезавантажувалась
    
    const formElements = event.currentTarget.elements;

    const email = formElements.email.value;
    const password = formElements.password.value;
    
    if (email === '' || password === '') {
        alert('All fields must be filled in!');
    } else {
        console.log('Email:', email, 'Password:', password);

        document.querySelector('.login-form').reset();

    };
} 



