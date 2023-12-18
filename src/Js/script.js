const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click' , () => {
    navbarMenu.classList.toggle('is-active');
})



document.addEventListener("DOMContentLoaded", function () {
    var slides = document.querySelectorAll(".slide");
    var currentIndex = 0;
  
    function showSlide(index) {
      for (var i = 0; i < slides.length; i++) {
        if (i === index) {
          slides[i].style.display = "block";
        } else {
          slides[i].style.display = "none";
        }
      }
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    // Attach event listeners to the angle icons
    var angleLeftIcon = document.querySelector(".fa-angle-left");
    var angleRightIcon = document.querySelector(".fa-angle-right");
  
    angleLeftIcon.addEventListener("click", prevSlide);
    angleRightIcon.addEventListener("click", nextSlide);
  
    // Show the initial slide
    showSlide(currentIndex);
  });

function hideShow() {
  const section = document.getElementById("certificates-resume");
  const toggleLink = document.getElementById("certificates__toggle");

  if (section.classList.contains("is-hidden")) {
    section.classList.remove("is-hidden");
    toggleLink.textContent = "less<<";
  } else {
    section.classList.add("is-hidden");
    toggleLink.textContent = "more>>";
  }
}