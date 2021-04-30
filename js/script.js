let checkButton = document.querySelector(".js-check__button");
let quizForm = document.querySelector(".js-form");
let pointSum = document.querySelector(".js-points__paragraph");
let level = document.querySelector(".js-level");
let correctAnswers = document.querySelector(".js-good");



quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let points = 0;
  let youskill;

  const ansvers = document.querySelectorAll("input:checked");
  ansvers.forEach((item) => {
    points += parseInt(item.value);
  });

  pointSum.innerText = `Wynik: ${points} pkt`;

  switch (points) {
    case 10:
    case 9:
      youskill = "High";
      level.innerText = `Twój poziom : ${youskill}.  Gratulacje!`;
      break;

    case 8:
    case 7:
    case 6:
      youskill = "Medium";
      level.innerText = `Twój poziom : ${youskill}. Musisz trochę popracować`;
      break;

    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
      youskill = "Low";

      level.innerText = `Twój poziom : ${youskill}. Nie załamuj się w YOUCODE nie zginiesz!`;
      break;
  }
  quizForm.addEventListener("reset", () => {
    level.innerText = "Poziom:";
    pointSum.innerText = "Wynik:";
  });

  //checkButton.addEventListener("click", () => {
   // let showText = "Pokaz odpowiedzi";
   // let hideText = "Ukryj odpowiedzi";
   // checkButton.innerText =
   //   checkButton.innerText === showText ? hideText : showText;
   //   for (let i = 0; i < 10; i++) {
   //   correctAnswers[i].classList.toggle("form__goodAnswer");
    
 //   }
 // });
  
});
