// Profile page carousel

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

// let currentCard = 0;

// function flipCard(card) {
//     card.classList.toggle('flipped');
// }

// function nextCard() {
//     const cards = document.querySelectorAll('.card');
//     // Hide the current card
//     flipCard(cards[currentCard].querySelector('.card-inner'));
//     // Move to the next card
//     currentCard = (currentCard + 1) % cards.length;
//     // Show the next card
//     flipCard(cards[currentCard].querySelector('.card-inner'));
// }

function toggleAnswer(button) {
  // Get the parent <li> element
  var listItem = button.parentElement;

  // Get all elements with the class "answer" within the parent <li>
  var answers = listItem.getElementsByClassName('answer');

  // Loop through the answer elements and toggle their visibility
  for (var i = 0; i < answers.length; i++) {
      answers[i].style.display = (answers[i].style.display === 'none' || answers[i].style.display === '') ? 'block' : 'none';
  }
}
