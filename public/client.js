let currentSlide = 0;

function nextSlide() {
    const slides = document.querySelectorAll('.card');

    if (currentSlide < slides.length - 1) {
        slides[currentSlide].style.display = 'none';
        currentSlide++;
        slides[currentSlide].style.display = 'block';
    } else {
        // If you want the carousel to loop back to the first slide
        currentSlide = 0;
        slides[slides.length - 1].style.display = 'none';
        slides[currentSlide].style.display = 'block';
    }
}

// Changes carousel
// let currentSlide = 0;
// let intervalId;

// function nextSlide() {
//   const slides = document.querySelectorAll('.card');
  
//   if (currentSlide < slides.length - 1) {
//     slides[currentSlide].style.display = 'none';
//     currentSlide++;
//     slides[currentSlide].style.display = 'block';
//   } else {
//     currentSlide = 0;
//     slides[slides.length - 1].style.display = 'none';
//     slides[currentSlide].style.display = 'block';
//   }

//   resetInterval();
// }

// function resetInterval() {
//   clearInterval(intervalId);
//   intervalId = setInterval(nextSlide, 5000); // Change slide every 5 seconds
// }

// // Start the automatic sliding on page load
// resetInterval();
