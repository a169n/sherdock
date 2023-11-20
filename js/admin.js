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

document.addEventListener("DOMContentLoaded", function () {
     displayFormData();
});

function displayFormData() {
     const formDataSection = document.getElementById("formData");

     // Retrieve data from localStorage
     const formData = JSON.parse(localStorage.getItem('formData')) || [];

     // Create HTML elements for each entry and append them to the formDataSection
     formData.forEach((data, index) => {
          const formDataCard = document.createElement("div");
          formDataCard.classList.add("card", "m-3", "col-md-4");

          // Create HTML content based on the data structure
          formDataCard.innerHTML = `
               <div class="card-body">
                    <h5 class="card-title">${data.patientName}</h5>
                    <p class="card-text">Age: ${data.patientAge}</p>
                    <p class="card-text">Reason for Hospitalization: ${data.reasonForHospitalization}</p>
                    <p class="card-text">Admission Date: ${data.admissionDate}</p>
                    <p class="card-text">Contact Number: ${data.contactNumber}</p>
                    <p class="card-text">Type of Room: ${data.roomPreference}</p>
                    <button class="btn btn-primary edit-button" onclick="editFormData(${index})">Edit</button>
                    <button class="btn btn-danger delete-button" onclick="deleteFormData(${index})">Delete</button>
               </div>
          `;

          // Append the formDataCard to the formDataSection
          formDataSection.appendChild(formDataCard);
     });
}

function editFormData(index) {
     // Retrieve data from localStorage
     const formData = JSON.parse(localStorage.getItem('formData')) || [];

     // Retrieve the specific data entry
     const dataToEdit = formData[index];

     // Assuming you have a form for editing, you can populate the form fields with the dataToEdit
     // For example, set the form field values using JavaScript:
     document.getElementById("patientName").value = dataToEdit.patientName;
     document.getElementById("patientAge").value = dataToEdit.patientAge;
     document.getElementById("reasonForHospitalization").value = dataToEdit.reasonForHospitalization;
     document.getElementById("admissionDate").value = dataToEdit.admissionDate;
     document.getElementById("contactNumber").value = dataToEdit.contactNumber;
     document.getElementById("roomPreference").value = dataToEdit.roomPreference;

     // Optionally, scroll to the top of the form for better visibility
     document.getElementById("myForm").scrollIntoView({
          behavior: "smooth"
     });
}

function deleteFormData(index) {
     // Retrieve data from localStorage
     const formData = JSON.parse(localStorage.getItem('formData')) || [];

     // Remove the specified data entry
     formData.splice(index, 1);

     // Save the updated data back to localStorage
     localStorage.setItem('formData', JSON.stringify(formData));

     // Clear the existing displayed cards
     const formDataSection = document.getElementById("formData");
     formDataSection.innerHTML = "";

     // Redisplay the updated data
     displayFormData();
}