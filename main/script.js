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