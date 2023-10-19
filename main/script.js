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

const form = document.getElementById("hospitalizationForm");
const submissionResult = document.getElementById("submissionResult");

form.addEventListener("submit", function (event) {
     event.preventDefault();

     submissionResult.textContent = "Форма успешно отправлена!";

     setTimeout(function () {
          submissionResult.textContent = "";
     }, 3000);

     form.reset();
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