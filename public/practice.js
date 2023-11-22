<h1>Study for US Citizenship</h1>
<main>
    <button id="prev"></button>
    <div id="card">
      <div class="side front">
            <% exam.map((exam, index) => {%>
                <div data-object-id="<%=exam._id%>">
                <p><%=exam.questionEng%></p>
                <p><%=exam.questionLao%></p>
                </div>
                <% }) %>
      </div>
      <div class="side back">
            <% answer.map((answer, index) => {%>
                <div data-object-id="<%=answer._id%>">
                <p><%=answer.answerEng%></p>
                <p><%=answer.answerLao%></p>
                </div>
            <% }) %>
      </div>
    </div>
    <button id="next"></button>
  </main>
<footer>
<div id="count"></div>
</footer>  



// Flashcard design on study page from codepen; make this your own
//variables
const card = document.querySelector("#card");
const front = document.querySelector(".front");
const back = document.querySelector(".back");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const count = document.querySelector("#count");
// const endpoint =
//   "https://gist.githubusercontent.com/cahdeemer/90a32410656e2aa33d29b694bc28ab08/raw/4c7ae385f4f1c1ec7c42ef0154f927ace3d3f12e/interview_prep.json";
// const questions = [];

let current = 0;
let turned = false;

//remember that fetch doesn't return the data, fetch returns a promise
// fetch(endpoint)
//   //blog.json also returns a promise
//   .then(blob => blob.json())
//   //using spread operator means that we don't get an nested arrays, we just get an array
//   .then(data => questions.push(...data))
//   //we set the initial state after data is ready
//   .then(populateNextCard);

//this function automatically resets the card to the front face if prev or next is clicked
function resetCard() {
  prev.disabled = false; 
  next.disabled = false;
  card.classList.remove("turned");
}

//this function takes data from the database and populates it with text, current++ iterates to next document in db 
function populateNextCard() {
  resetCard();
  front.innerHTML = `<p>${exam[current].examData}</p>`;
  back.innerHTML = `<p>${questions[current].answer}</p>`;
  count.innerHTML = `<p>${[current + 1]} / ${questions.length}</p>`;
  current++;
}

//this function is the next button
function getNextCard() {
  if (current < questions.length) {
    populateNextCard();
  } else {
    next.disabled = true;
  }
}

//this function is the prevous button; similar to getNext but -2 by taking into acct the new card and the one you want to get to (previous)
function getPrevCard() {
  if (current > 1) {
    resetCard();
    front.innerHTML = `<p>${questions[current - 2].question}</p>`;
    back.innerHTML = `<p>${questions[current - 2].answer}</p>`;
    count.innerHTML = `<p>${[current - 1]} / ${questions.length}</p>`;
    current--;
  } else {
    prev.disabled = true;
  }
}

//this flips the card to see the back (answer)
function toggleTurn(e) {
  turned = !turned;
  if (turned) {
    this.classList.add("turned");
  } else {
    this.classList.remove("turned");
  }
}

//event listeners added to user buttons
card.addEventListener("click", toggleTurn);
next.addEventListener("click", getNextCard);
prev.addEventListener("click", getPrevCard);