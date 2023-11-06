// scroll.js
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
     const scrollPosition = errorMessage.offsetTop - (windowHeight - errorMessageHeight) / 2;

     window.scrollTo({
          top: scrollPosition,
     });
}