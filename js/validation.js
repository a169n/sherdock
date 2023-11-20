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
     let roomPreference = document.getElementById("roomPreference");

     let errorMessage = document.getElementById("errorMessage");
     let errorMessageBtn = document.getElementById("closeError");

     if (patientName.value === "" || patientAge.value === "" || reasonForHospitalization.value === "" || admissionDate.value === "" || contactNumber.value === "" || roomPreference.value === "undefined") {
          errorMessage.style.display = "block";
          errorMessageBtn.style.display = "block";

          scrollErrorMessageToCenter();
     } else {
          // Create an object to store the form data
          const formData = {
               patientName: patientName.value,
               patientAge: patientAge.value,
               reasonForHospitalization: reasonForHospitalization.value,
               admissionDate: admissionDate.value,
               contactNumber: contactNumber.value,
               roomPreference: roomPreference.value
          };

          // Send the data to localhost

          // Save the data locally
          saveFormDataToLocal(formData);

          // Reset the form
          document.getElementById("myForm").reset();

          alert("Form submitted successfully!");
          document.getElementById("submissionResult").textContent = "";
     }
}



function saveFormDataToLocal(data) {
     // Retrieve existing data from localStorage
     const existingData = JSON.parse(localStorage.getItem('formData')) || [];

     // Add new data to the array
     existingData.push(data);

     // Save the updated data back to localStorage
     localStorage.setItem('formData', JSON.stringify(existingData));
}

document.addEventListener("DOMContentLoaded", function () {
     document.getElementById("closeError").addEventListener("click", function () {
          document.getElementById("errorMessage").style.display = "none";
     });
});