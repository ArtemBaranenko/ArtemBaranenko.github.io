document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    let isValid = true;

    // Validate Name
    let nameRegex = /^[A-Za-z\s'-]{2,50}$/;
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    } else if (!nameRegex.test(name)) {
        document.getElementById('nameError').textContent = 'Valid name is required';
        isValid = false;
    }

    // Validate Email using Regex
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Valid email is required';
        isValid = false;
    }

    // Validate Message
    let messageRegex = /^.{10,500}$/;
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message cannot be empty';
        isValid = false;
    }else if (!messageRegex.test(message)) {
        document.getElementById('messageError').textContent = 'Valid message is required';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // Here you can send data to server
    }
});