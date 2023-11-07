let registrationData = [];

document.addEventListener('DOMContentLoaded', function () {
     const userDataContainer = document.getElementById('userData');
     registrationData = JSON.parse(localStorage.getItem('registrationData')) || [];
     updateTable();
});

function editUser(user) {
     const newName = prompt('Enter a new name:', user.fullName);
     if (newName !== null) {
          user.fullName = newName;
          updateTable();
          localStorage.setItem('registrationData', JSON.stringify(registrationData));
     }
}

function deleteUser(user) {
     const confirmation = confirm('Are you sure you want to delete ' + user.fullName + '?');
     if (confirmation) {
          const index = registrationData.indexOf(user);
          if (index !== -1) {
               registrationData.splice(index, 1);
               updateTable();
               localStorage.setItem('registrationData', JSON.stringify(registrationData));
          }
     }
}

function updateTable() {
     const userDataContainer = document.getElementById('userData');
     userDataContainer.innerHTML = '';

     for (const user of registrationData) {
          const row = document.createElement('tr');

          const fullNameCell = document.createElement('td');
          fullNameCell.textContent = user.fullName;

          const emailCell = document.createElement('td');
          emailCell.textContent = user.email;

          const ageCell = document.createElement('td');
          ageCell.textContent = user.age;

          const actionsCell = document.createElement('td');

          const editButton = document.createElement('button');
          editButton.textContent = "Edit";
          editButton.classList.add("edit");
          editButton.addEventListener('click', () => editUser(user));

          const deleteButton = document.createElement('button');
          deleteButton.textContent = "Delete";
          deleteButton.classList.add("delete");
          deleteButton.addEventListener('click', () => deleteUser(user));

          actionsCell.appendChild(editButton);
          actionsCell.appendChild(deleteButton);

          row.appendChild(fullNameCell);
          row.appendChild(emailCell);
          row.appendChild(ageCell);
          row.appendChild(actionsCell);

          userDataContainer.appendChild(row);
     }
}