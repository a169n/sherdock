function displayAlert() {
     alert("Button clicked! This is your alert message.");
}

window.addEventListener("scroll", function () {
     let scrollToTopButton = document.querySelector(".scrollTop");

     if (window.pageYOffset > 600) {
          scrollToTopButton.style.display = "block";
     } else {
          scrollToTopButton.style.display = "none";
     }
});

function scrollToTop() {
     window.scrollTo({
          top: 0,
     });
}

function scrollErrorMessageToCenter() {
     let errorMessage = document.getElementById("errorMessage");

     const windowHeight = window.innerHeight;
     const errorMessageHeight = errorMessage.offsetHeight;
     const scrollPosition = (errorMessage.offsetTop - (windowHeight - errorMessageHeight) / 2);

     window.scrollTo({
          top: scrollPosition
     });
}


function validateForm() {
     event.preventDefault();

     let patientName = document.getElementById("patientName");
     let patientAge = document.getElementById("patientAge");
     let reasonForHospitalization = document.getElementById("reasonForHospitalization");
     let admissionDate = document.getElementById("admissionDate");
     let contactNumber = document.getElementById("contactNumber");
     let errorMessage = document.getElementById("errorMessage");
     let errorMessageBtn = document.getElementById("closeError");

     if (patientName.value === "" || patientAge.value === "" || reasonForHospitalization.value === "" || admissionDate.value === "" || contactNumber.value === "") {
          errorMessage.style.display = "block";
          errorMessageBtn.style.display = "block";

          scrollErrorMessageToCenter();
     } else {
          document.getElementById("myForm").reset();
          alert("Форма успешно отправлена!");

          document.getElementById("submissionResult").textContent = "";
     }
}

document.getElementById("closeError").addEventListener("click", function () {
     document.getElementById("errorMessage").style.display = "none";
});

const discountEndDate = new Date('2023-11-25T23:59:59');

function formatNumberWithLeadingZero(number) {
     if (number < 10) {
          return '0' + number;
     } else {
          return String(number);
     }
}

function updateCountdown() {
     const currentDate = new Date();
     const timeLeft = discountEndDate - currentDate;

     if (timeLeft < 0) {
          document.getElementById("countdown").innerHTML = "Discount Expired";
     } else {
          const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

          document.getElementById("days").textContent = formatNumberWithLeadingZero(days);
          document.getElementById("hours").textContent = formatNumberWithLeadingZero(hours);
          document.getElementById("minutes").textContent = formatNumberWithLeadingZero(minutes);
          document.getElementById("seconds").textContent = formatNumberWithLeadingZero(seconds);
     }
}

setInterval(updateCountdown, 1000);
updateCountdown();

const images = [
     "/pictures/clinic1.jpg",
     "/pictures/clinic2.jpeg",
     "/pictures/clinic3.jpg",
     "/pictures/clinic4.jpg",
     "/pictures/clinic5.jpg"
];
let currentIndex = 0;

const imageSlider = document.getElementById("imageSlider");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

nextBtn.addEventListener("click", () => {
     currentIndex = (currentIndex + 1) % images.length;
     updateSliderImage();
});

prevBtn.addEventListener("click", () => {
     currentIndex = (currentIndex - 1 + images.length) % images.length;
     updateSliderImage();
});

function updateSliderImage() {
     imageSlider.innerHTML = `<img src="${images[currentIndex]}" alt="clinic ${currentIndex + 1}">`;
}

const faqData = [{
          question: "Что такое ваш сервис?",
          answer: "Наш сервис предоставляет возможность быстро госпитализировать пациентов и управлять их медицинской информацией через мессенджеры, без лишних трудностей.",
     },
     {
          question: "Как быстро можно создать заявку на госпитализацию?",
          answer: "Заполнение заявки с нашим ботом займет всего несколько минут. Вся информация о пациенте доступна в одном месте, что упрощает процесс.",
     },
     {
          question: "Как я могу узнать статус госпитализации по заявке?",
          answer: "Вы всегда можете проверить статус госпитализаций по ваших заявках через интерфейс бота. Все данные прозрачны и доступны в реальном времени.",
     },
     {
          question: "Есть ли ограничения по использованию сервиса?",
          answer: "Нет, у нас нет ограничений. Кроме того, у нас есть партнерская программа, которая позволяет создавать пассивный доход для желающих больше заработать.",
     },
     {
          question: "Как связаться с вами, если у меня остались вопросы?",
          answer: "Если у вас возникли вопросы или вам необходима дополнительная информация, пожалуйста, свяжитесь с нами через Telegram или WhatsApp, нажав на соответствующую кнопку ниже."
     }
];

const faqAccordion = document.getElementById('faq-accordion');

faqData.forEach((faq, index) => {
     const faqItem = document.createElement('div');
     faqItem.classList.add('faq-item');

     const question = document.createElement('div');
     question.classList.add('faq-question');
     question.textContent = `${index + 1}.${faq.question}`;

     const answer = document.createElement('div');
     answer.classList.add('faq-answer');
     answer.textContent = faq.answer;

     faqItem.appendChild(question);
     faqItem.appendChild(answer);
     faqAccordion.appendChild(faqItem);
});

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// Registration Modal
var registrationModal = document.getElementById("myCustomModal");
var registrationBtn = document.getElementById("myCustomBtn");
var registrationClose = document.querySelector("#closeCustomModal");
var hasRegistrationValidationErrors = false; // Track validation errors for registration

// Open the Registration Modal
registrationBtn.onclick = function() {
  registrationModal.style.display = "block";
};

// Close the Registration Modal
registrationClose.onclick = function() {
  registrationModal.style.display = "none";
};

// Close the Registration Modal when clicking outside
window.onclick = function(event) {
  if (event.target == registrationModal && !hasRegistrationValidationErrors) {
    registrationModal.style.display = "none";
  }
};

const registrationForm = document.getElementById('registrationForm');
const regUsername = document.getElementById('reg-username');
const regEmail = document.getElementById('reg-email');
const regAge = document.getElementById('reg-age');
const regPassword = document.getElementById('reg-password');

// Add event listeners to input fields for real-time validation
regUsername.addEventListener('input', validateUsername);
regEmail.addEventListener('input', validateEmail);
regAge.addEventListener('input', validateAge);
regPassword.addEventListener('input', validatePassword);

// Validation functions for each input field
function validateUsername() {
  const username = regUsername.value;
  const usernameError = document.getElementById('reg-username-error');

  if (username.length < 5) {
    usernameError.textContent = 'Full name must be at least 5 characters long.';
  } else {
    usernameError.textContent = '';
  }
}

function validateEmail() {
  const email = regEmail.value;
  const emailError = document.getElementById('reg-email-error');
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!email.match(emailPattern)) {
    emailError.textContent = 'Invalid email address.';
  } else {
    emailError.textContent = '';
  }
}

function validateAge() {
  const age = regAge.value;
  const ageError = document.getElementById('reg-age-error');

  if (isNaN(age) || age < 18) {
    ageError.textContent = 'Age must be a number and at least 18.';
  } else {
    ageError.textContent = '';
  }
}

function validatePassword() {
  const password = regPassword.value;
  const passwordError = document.getElementById('reg-password-error');

  if (password.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters long.';
  } else {
    passwordError.textContent = '';
  }
}

// Add a submit event listener to the form for final validation
registrationForm.addEventListener('submit', function (e) {
  const username = regUsername.value;
  const email = regEmail.value;
  const age = regAge.value;
  const password = regPassword.value;
  const registrationErrorMessage = document.getElementById('registration-error-message');

  if (username.length < 5 || !email.match(emailPattern) || isNaN(age) || age < 18 || password.length < 6) {
    registrationErrorMessage.textContent = 'Please correct the errors in the form.';
    e.preventDefault(); // Prevent form submission if there are validation errors
  } else {
    registrationErrorMessage.textContent = '';
  }
});
// Define an array to store registration data
const registrationData = [];

// Add a submit event listener to the registration form for saving user data
registrationForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from submitting to the server

  // Get the values entered in the form
  const username = regUsername.value;
  const email = regEmail.value;
  const age = regAge.value;
  const password = regPassword.value;

  // Check if there are any validation errors
  const registrationErrorMessage = document.getElementById('registration-error-message');
    const userData = {
      fullName: username,
      email: email,
      age: parseInt(age),
      password: password,
    };

    // Push the user data object into the registrationData array
    registrationData.push(userData);

    // Optionally, you can save the array to local storage or send it to a server, if needed

    // Clear the form for the next registration
    registrationForm.reset();
    var registrButton = document.getElementById('myCustomBtn');
    if (registrButton) {
      registrButton.style.display = 'none';
    }
    console.log(registrationData.fullName);
    alert('Registration successful!'+ userData.fullName);

  });


const openLoginModalButton = document.getElementById('openLoginModal');
  const loginModal = document.getElementById('loginModal');
  const closeLoginModalButton = document.getElementById('closeLoginModal');

  // Open the login modal when the "Login" button is clicked
  openLoginModalButton.addEventListener('click', function () {
    loginModal.style.display = 'block';
  });

  // Close the login modal when the close button is clicked
  closeLoginModalButton.addEventListener('click', function () {
    loginModal.style.display = 'none';
  });

// Add event listeners to input fields for real-time validation in the login form
const loginUsername = document.getElementById('login-username');
const loginPassword = document.getElementById('login-password');

loginUsername.addEventListener('input', validateLoginUsername);
loginPassword.addEventListener('input', validateLoginPassword);

// Validation functions for each input field in the login form
function validateLoginUsername() {
  const username = loginUsername.value;
  const loginUsernameError = document.getElementById('login-username-error');
  if (username.length < 5) {
     loginUsernameError.textContent = 'Full name must be at least 5 characters long.';
   } else {
     loginUsernameError.textContent = '';
   }
}

function validateLoginPassword() {
  const password = loginPassword.value;
  const loginPasswordError = document.getElementById('login-password-error');

  if (password.length < 6) {
    loginPasswordError.textContent = 'Password must be at least 6 characters long.';
  } else {
    loginPasswordError.textContent = '';
  }
}

// Add a submit event listener to the login form
loginForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from submitting to the server

  const username = loginUsername.value;
  const password = loginPassword.value;
  const loginErrorMessage = document.getElementById('login-error-message');

  // Additional client-side validation can be added here if needed

  // Compare the entered username and password with data from registrationData
  const userFound = registrationData.some((user) => user.fullName === username && user.password === password);
  if (username === "aibyn18" && password === "aibyn18") {
    // Redirect to the admin page (replace 'admin.html' with the actual URL)
    window.location.href = 'admin.html';
    console.log(registrationData);
    populateUserList();
  } else if (userFound) {
      alert('Welcome');
      var loginButton = document.getElementById('openLoginModal');
      if (loginButton) {
        loginButton.style.display = 'none';
      }
      // You can add code to redirect regular users to a different page if needed
      // window.location.href = 'regular-user-page.html';
    }
   else {
    alert('User not found');
  }
});
function populateUserList() {
  // Get a reference to the user list table
  const userListTable = document.getElementById('userList').querySelector('tbody');

  // Clear the existing table rows
  userListTable.innerHTML = '';

  // Loop through the registrationData array and add rows to the table
  registrationData.forEach((userData) => {
    const newRow = userListTable.insertRow();
    const fullNameCell = newRow.insertCell(0);
    const emailCell = newRow.insertCell(1);
    const ageCell = newRow.insertCell(2);
    const actionsCell = newRow.insertCell(3);

    fullNameCell.textContent = userData.fullName;
    emailCell.textContent = userData.email;
    ageCell.textContent = userData.age;
    // You can add actions (Edit or Delete buttons) in the actionsCell if needed.
  });
}

// Call the populateUserList function to initially populate the table
populateUserList();

// // // Define a reference to the HTML table element
// // const userListTable = document.getElementById('userList');

// // // Function to populate the table with user data
// // function populateTable() {
// //   // Clear the existing table rows
// //   userListTable.querySelector('tbody').innerHTML = '';

// //   // Loop through the registrationData array and add rows to the table
// //   registrationData.forEach((userData, index) => {
// //     const newRow = userListTable.querySelector('tbody').insertRow();
// //     const fullNameCell = newRow.insertCell(0);
// //     const emailCell = newRow.insertCell(1);
// //     const ageCell = newRow.insertCell(2);
// //     const actionsCell = newRow.insertCell(3);

// //     fullNameCell.textContent = userData.fullName;
// //     emailCell.textContent = userData.email;
// //     ageCell.textContent = userData.age;

// //     // You can add actions like Edit or Delete buttons in the actionsCell if needed
// //     // Example: actionsCell.innerHTML = '<button>Edit</button> <button>Delete</button>';
// //   });
// // }

// // // Call the populateTable function to initially populate the table
// // populateTable();
// //  // Call the function to populate the user list when the page loads


// function populateUserList() {
//   const userList = document.getElementById('userList');

//   if (registrationData.length === 0) {
//     userList.style.display = 'none';
//   } else {
//     userList.style.display = 'table'; // Display the table
//     userList.innerHTML = '';

//     registrationData.forEach(user => {
//       const row = document.createElement('tr');
//       row.innerHTML = `
//         <td>${user.fullName}</td>
//         <td>${user.email}</td>
//         <td>${user.age}</td>
//         <td>
//           <button onclick="editUser('${user.fullName}')">Edit</button>
//           <button onclick="deleteUser('${user.fullName}')">Delete</button>
//         </td>
//       `;

//       userList.appendChild(row);
//     });
  // }
// }

