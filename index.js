document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
   
    const li = document.createElement('li');
    li.textContent = `Name: ${name}, Email: ${email}, Password: ${password}, date of Birth: ${dob}`;
    
    document.getElementById('userList').appendChild(li);

    document.getElementById('registrationForm').reset();
});
