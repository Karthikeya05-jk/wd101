document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const password = document.getElementById('password').value;


    const tableRow = document.createElement('tr');

 
    tableRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${dob}</td>
        <td>${password}</td>
    `;

  
    document.getElementById('userTableBody').appendChild(tableRow);


    document.getElementById('registrationForm').reset();
});
