// function saveToLocalStorage() {
//      localStorage.setItem('registrationData', JSON.stringify(registrationData));
// }

// function populateAdminPanel() {
//      const storedData = JSON.parse(localStorage.getItem('registrationData'));

//      if (storedData) {
//           const userListTable = document.getElementById('userList').querySelector('tbody');
//           userListTable.innerHTML = '';
//           storedData.forEach((userData) => {
//                const newRow = userListTable.insertRow();
//                const fullNameCell = newRow.insertCell(0);
//                const emailCell = newRow.insertCell(1);
//                const ageCell = newRow.insertCell(2);
//                fullNameCell.textContent = userData.fullName;
//                emailCell.textContent = userData.email;
//                ageCell.textContent = userData.age;
//           });

//           const totalUsers = storedData.length;
//           const totalAge = storedData.reduce((sum, user) => sum + user.age, 0);
//           const averageAge = totalAge / totalUsers;

//           const statsContainer = document.getElementById('admin-stats');
//           statsContainer.innerHTML = `Total Users: ${totalUsers}<br>Average Age: ${averageAge.toFixed(2)}`;
//      }
// }

// function createRemoveButton(userId) {
//      const removeButton = document.createElement('button');
//      removeButton.textContent = 'Remove';
//      removeButton.addEventListener('click', () => {
//           const storedData = JSON.parse(localStorage.getItem('registrationData'));
//           const updatedData = storedData.filter(user => user.userId !== userId);
//           localStorage.setItem('registrationData', JSON.stringify(updatedData));
//           populateAdminPanel();
//      });
//      return removeButton;
// }

// populateAdminPanel();

// function displayUserInfo(username, email) {
//      const userInformationDiv = document.getElementById('userInformation');
//      const userInfoName = document.getElementById('userInfoName');
//      const userInfoEmail = document.getElementById('userInfoEmail');

//      userInfoName.textContent = username;
//      userInfoEmail.textContent = email;

//      userInformationDiv.style.display = 'block';

//      // Hide the registration and login buttons
//      const registrationBtn = document.getElementById('myCustomBtn');
//      const loginBtn = document.getElementById('openLoginModal');
//      if (registrationBtn) registrationBtn.style.display = 'none';
//      if (loginBtn) loginBtn.style.display = 'none';
// }

// // Populate the registered users in the table (Admin Panel)
// function populateUserList() {
//      const userListTable = document.getElementById('userList').querySelector('tbody');
//      userListTable.innerHTML = '';
//      registrationData.forEach((userData) => {
//           const newRow = userListTable.insertRow();
//           const fullNameCell = newRow.insertCell(0);
//           const emailCell = newRow.insertCell(1);
//           const ageCell = newRow.insertCell(2);
//           fullNameCell.textContent = userData.fullName;
//           emailCell.textContent = userData.email;
//           ageCell.textContent = userData.age;
//      });
// }

// // Check if a user is already logged in and display their info
// if (localStorage.getItem('loggedInUser')) {
//      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
//      displayUserInfo(loggedInUser.fullName, loggedInUser.email);
// }