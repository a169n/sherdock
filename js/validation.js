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

document.addEventListener("DOMContentLoaded", function () {
     document.getElementById("closeError").addEventListener("click", function () {
          document.getElementById("errorMessage").style.display = "none";
     });
});