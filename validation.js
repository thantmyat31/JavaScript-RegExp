// Start validation

const patterns = {
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    telephone: /^\d{9}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d-\.]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}

function validation(field, regex) {
    if(regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
    input.addEventListener('keyup', function(e) {
        validation(e.target, patterns[e.target.attributes.name.value]);
    });
});