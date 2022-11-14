'use strict';
const emailInput = document.querySelector('input[name=email]');
const passwordInput = document.querySelector('input[name=password]');
const confirmPasswordInput = document.querySelector('input[name=confirm_password]');
const gender = document.querySelectorAll('input[name="gender"]');
const button = document.getElementById('button');

button.addEventListener('click', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    const confirmPassword = document.getElementById('confirm_password').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const textarea = document.getElementById('textarea').value;
    const checkbox = document.getElementById('checkbox').checked;

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    if (!validateEmail(email)) {
        emailInput.style.borderColor ='#EE2424';
        emailError.innerHTML = "Email введён некорректно";
    };

    if (email === "") {
        emailInput.style.borderColor ='#EE2424';
        emailError.innerHTML = "Поле обязательно для заполнения";
    };

    if (password.length < 8) {
        passwordInput.style.borderColor ='#EE2424';
        passwordError.innerHTML = "Пароль должен содержать не менее 8 символов";
    };

    if (password === "") {
        passwordInput.style.borderColor ='#EE2424';
        passwordError.innerHTML = "Поле обязательно для заполнения";
    };
    
    if (confirmPassword === "") {
        confirmPasswordInput.style.borderColor = '#EE2424';
        confirmPasswordError.innerHTML = "Пароли не совпадают";
    };

    if (confirmPassword != password) {
        confirmPasswordInput.style.borderColor = '#EE2424';
        confirmPasswordInput.innerHTML = "Пароли не совпадают";
    };

    let genderInput = '';
    for (let i = 0 ; i < gender.length; i++) {
        if(gender[i].checked) {
            genderInput = gender[i].value;
            break;
        }
    };

    if(validateEmail(email) === true && password.length >= 8 && password === confirmPassword) {
        formSubmissions ();
    };
    
    function formSubmissions () {
        let users = new Object();
        users.email = email;
        users.password = password;
        users.textarea = textarea;
        users.checkbox = checkbox;
        users.gender = genderInput;

        return console.log(users)
    }
});
