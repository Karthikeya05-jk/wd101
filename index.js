document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const password = document.getElementById('password').value;
    const terms = document.getElementById('terms').checked;

    // Validate email
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate age
    if (!validateAge(dob)) {
        alert("Age must be between 18 and 55.");
        return;
    }

    // Create a new user object
    const user = { name, email, dob, password, terms: terms ? "Yes" : "No" };

    // Save user to localStorage
    saveUser(user);

    // Add user to table
    addUserToTable(user);

    // Clear form fields
    document.getElementById('registrationForm').reset();
});

// Validate email using regular expression
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Validate age between 18 and 55
function validateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age >= 18 && age <= 55;
}

// Save user to localStorage
function saveUser(user) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

// Add user to table
function addUserToTable(user) {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td>${user.dob}</td>
        <td>${user.terms}</td>
    `;
    document.getElementById('userTableBody').appendChild(tableRow);
}

// Load users from localStorage and display in table
function loadUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.forEach(addUserToTable);
}

// Load users on page load
window.onload = loadUsers;
