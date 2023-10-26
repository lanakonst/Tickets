const form = document.querySelector('.contactForm');
const emailInput = document.getElementById('email');
const warning = document.getElementById('warning');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    var re = /^(\w|\d|\.|\_|\-)+@\w+\.\w+$/;
    if (email.match(re)) {
        warning.classList.remove('invalid');
        warning.classList.add('valid');
    } else {
        warning.classList.remove('valid');
        warning.classList.add('invalid');
    }
})

