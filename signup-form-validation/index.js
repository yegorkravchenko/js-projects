const inputs = document.querySelectorAll('form input');
const btn = document.querySelector('button');

const [usernameInput, passInput, emailInput] = inputs;

let isUsernameValid = false;
let isPassValid = false;
let isEmailValid = false;

function inputValidation(regEx, input, isValid) {
    if (regEx.test(input.value)) {
        isValid = true;
        input.style.border = '1px solid #6FCF97';
    } else if (input.value === '') {
        input.style.border = '1px solid rgba(135, 135, 135, 0.2)';
    } else {
        isValid = false;
        input.style.border = '1px solid #EB5757';
    }
}

inputs.forEach(input => input.addEventListener('input', () => {
    const usernameRegex = /^[a-z0-9]+$/ig;
    const passRegex = /^[a-z]+$/;
    const emailRegex = /^[a-z0-9]+(\.)?[a-z0-9]+(@gmail\.com)$/;
    
    switch (input.placeholder) {
        case 'Username':
            inputValidation(usernameRegex, input, isUsernameValid);
            break;
        case 'Password':
            inputValidation(passRegex, input, isPassValid);
            break;
        case 'Email':
            inputValidation(emailRegex, input, isEmailValid);
            break;
    }
}));

inputs.forEach(input => input.addEventListener('change', () => {
    if (isUsernameValid && isPassValid && isEmailValid) {
        btn.style.backgroundColor = '#6FCF97';
    }
}));

console.log(isUsernameValid, isPassValid, isEmailValid);