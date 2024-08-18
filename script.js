document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    validateForm();
});

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    let errors = [];

    // Name validation
    if (name.length < 5) {
        errors.push('Name must be at least 5 characters.');
    }

    // Email validation
    if (!email.includes('@')) {
        errors.push('Enter a valid email address.');
    }

    // Phone validation
    if (phone === '1234567890' || phone.length !== 10) {
        errors.push('Enter a valid 10-digit phone number.');
    }

    // Password validation
    if (password.toLowerCase() === 'password' || password === name || password.length < 8) {
        errors.push('Password is not strong enough.');
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        errors.push('Passwords do not match.');
    }

    // Display errors
    displayErrors(errors);
}

function displayErrors(errors) {
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = ''; // Clear previous errors

    if (errors.length > 0) {
        errors.forEach(error => {
            const errorElement = document.createElement('div');
            errorElement.className = 'alert alert-danger';
            errorElement.textContent = error;
            errorMessages.appendChild(errorElement);
        });
    } else {
        const successMessage = document.createElement('div');
        successMessage.className = 'alert alert-success';
        successMessage.textContent = 'Form submitted successfully!';
        errorMessages.appendChild(successMessage);
        // Here you can actually submit the form if needed
        // document.getElementById('registrationForm').submit();
    }
}
