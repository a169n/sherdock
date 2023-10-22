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

const discountEndDate = new Date('2023-10-25T23:59:59');

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
     imageSlider.innerHTML = `<img src="${images[currentIndex]}" alt="clinic ${currentIndex + 1}" class="img-fluid">`;
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
     question.textContent = `${index + 1}. ${faq.question}`;

     const answer = document.createElement('div');
     answer.classList.add('faq-answer');
     answer.textContent = faq.answer;

     question.addEventListener('click', () => {
          answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
     });

     faqItem.appendChild(question);
     faqItem.appendChild(answer);
     faqAccordion.appendChild(faqItem);
});