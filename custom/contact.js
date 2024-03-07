const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const form = document.querySelector('form');

// hide certain properties and focus on the name which is the first box
window.onload = () => {
    // on page load highlight the name box
    //firstName.focus();
}

const firstNameValidator = (element) => {
    let nameValue = element.value;
    let nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
    return nameIsValid;
}

const emailValidator = (element) => {
    let emailValue = element.value;
    const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
    return emailIsValid;
}

function notValidStyler(element) {
    element.classList.add('not-valid');
    element.classList.remove('valid');
    if (element !== form) {
        element.parentNode.lastElementChild.style.display = '';
    }
}

function validStyler(element) {
    element.classList.add('valid');
    element.classList.remove('not-valid');
    if (element !== form) {
        element.parentNode.lastElementChild.style.display = 'none';
    }
}

// submit the form and if information is correct the page reloads
form.addEventListener('submit', e => {
    // NAME VALIDATOR
    if (!firstNameValidator(firstName)) {
        e.preventDefault();
        notValidStyler(firstName);
        document.getElementById('first-name-hint').style.display = 'block';
    } else {
        validStyler(firstName);
    }

    // LAST NAME VALIDATOR
    if (!lastNameValidator(lastName)) {
        e.preventDefault();
        notValidStyler(lastName);
        document.getElementById('last-name-hint').style.display = 'block';
    } else {
        validStyler(lastName);
    }

    // EMAIL VALIDATOR
    if (!emailValidator(email)) {
        e.preventDefault();
        notValidStyler(email);
        document.getElementById('email-hint').style.display = 'block';
    } else {
        validStyler(email);
    }
});

form.addEventListener('input', () => {
    validStyler(firstName);
    validStyler(lastName);
    validStyler(email);
});
