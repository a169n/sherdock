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
          behavior: "smooth"
     });
}

function validateForm() {
     event.preventDefault();

     let patientName = document.getElementById("patientName");
     let patientAge = document.getElementById("patientAge");
     let reasonForHospitalization = document.getElementById("reasonForHospitalization");
     let admissionDate = document.getElementById("admissionDate");
     let contactNumber = document.getElementById("contactNumber");

     if (patientName.value === "" || patientAge.value === "" || reasonForHospitalization.value === "" || admissionDate.value === "" || contactNumber.value === "") {
          let errorMessage = document.getElementById("errorMessage");
          errorMessage.style.display = "block";
          document.getElementById("closeError").style.display = "block";

          errorMessage.scrollIntoView();
     } else {
          document.getElementById("myForm").reset();
          alert("Форма успешно отправлена!");

          document.getElementById("submissionResult").textContent = "";
     }
}

document.getElementById("closeError").addEventListener("click", function () {
     document.getElementById("errorMessage").style.display = "none";
     this.style.display = "none";
});

const discountEndDate = new Date('2023-10-22T23:59:59');

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

          document.getElementById("days").textContent = String(days).padStart(2, '0');
          document.getElementById("hours").textContent = String(hours).padStart(2, '0');
          document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
          document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
     }
}

updateCountdown();
setInterval(updateCountdown, 1000);