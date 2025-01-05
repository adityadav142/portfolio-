// Initialize the Typed.js library to create a typing animation
const options = {
    strings: ["Web Developer", "UI/UX Designer", "JavaScript Enthusiast", "Creative Thinker"],
    typeSpeed: 100, // Speed of typing
    backSpeed: 50,  // Speed of backspacing
    backDelay: 1000, // Delay before backspacing
    startDelay: 500, // Delay before typing starts
    loop: true,  // Loop the typing animation
  };
  
  const typed = new Typed(".multiple-text", options);
  
  // This script handles the page scroll animation (optional)
  document.addEventListener("DOMContentLoaded", () => {
    const homeContent = document.querySelector(".home-content");
    setTimeout(() => {
      homeContent.style.opacity = 1;
      homeContent.style.transition = "opacity 2s ease-in";
    }, 500);
  });
  