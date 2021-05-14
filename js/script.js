let checkButton = document.querySelector(".js-check__button");
let quizForm = document.querySelector(".js-form");
let pointSum = document.querySelector(".js-points__paragraph");
let level = document.querySelector(".js-level");
let correctAnswers = document.querySelector(".js-good");



quizForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  let suma = 0;
  
  
  if(document.querySelector('input[name="answer1"]:checked').value == 1) {suma += 1;}
  if(document.querySelector('input[name="answer2"]:checked').value == 3) {suma += 1;}
  if(document.querySelector('input[name="answer3"]:checked').value == 2) {suma += 1;}
  if(document.querySelector('input[name="answer4"]:checked').value == 2) {suma += 1;}
  if(document.querySelector('input[name="answer5"]:checked').value == 3) {suma += 1;}
  if(document.querySelector('input[name="answer6"]:checked').value == 1) {suma += 1;}
  if(document.querySelector('input[name="answer7"]:checked').value == 2) {suma += 1;}
  if(document.querySelector('input[name="answer8"]:checked').value == 1) {suma += 1;}
  if(document.querySelector('input[name="answer9"]:checked').value == 1) {suma += 1;}
  if(document.querySelector('input[name="answer10"]:checked').value == 3) {suma += 1;}

  pointSum.innerText = `Wynik: ${suma} pkt`;

  switch (suma) {
    case 10:
    case 9:
      Level = "High";
      level.innerText = `Twój poziom : ${Level}.  Gratulacje!`;
      break;

    case 8:
    case 7:
    case 6:
      Level = "Medium";
      level.innerText = `Twój poziom : ${Level}. Musisz trochę popracować`;
      break;

    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
      Level = "Low";

      level.innerText = `Twój poziom : ${Level}. Nie załamuj się w YOUCODE nie zginiesz!`;
      break;
  }
  quizForm.addEventListener("reset", () => {
    level.innerText = "Poziom:";
    pointSum.innerText = "Wynik:";
  });

  
  
});
