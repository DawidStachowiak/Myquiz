let checkButton = document.querySelector(".js-check__button");
let quizForm = document.querySelector(".js-form");
let pointSum = document.querySelector(".js-points__paragraph");
let level = document.querySelector(".js-level");
let correctAnswers = document.querySelector(".js-good");



quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let points = 0;
  let yourLevel;

  const ansvers = document.querySelectorAll("input:checked");
  ansvers.forEach((item) => {
    points += parseInt(item.value);
  });

  pointSum.innerText = `Wynik: ${points} pkt`;

  switch (points) {
    case 10:
    case 9:
      yourLevel = "High";
      level.innerText = `Twój poziom : ${yourLevel}.  Gratulacje!`;
      break;

    case 8:
    case 7:
    case 6:
      yourLevel = "Medium";
      level.innerText = `Twój poziom : ${yourLevel}. Musisz trochę popracować`;
      break;

    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
      yourLevel = "Low";

      level.innerText = `Twój poziom : ${yourLevel}. Nie załamuj się w YOUCODE nie zginiesz!`;
      break;
  }
  quizForm.addEventListener("reset", () => {
    level.innerText = "Poziom:";
    pointSum.innerText = "Wynik:";
  });

  
  
});
