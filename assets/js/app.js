//              0           1           2           3           4       5           6
const weekDays = [
  "lunedì",
  "martedì",
  "mercoledì",
  "giovedì",
  "venerdì",
  "sabato",
  "domenica",
];

const holidays = [4, 5, 29];
const rowElem = document.querySelector(".row");

//la settimana inizia da venerdì 1 con indice 4

for (let i = 1; i <= 31; i++) {
  const squareElem = document.createElement("div");
  squareElem.classList.add("square");
  squareElem.classList.add("flex");
  squareElem.classList.add("just-cont-ctr");
  squareElem.classList.add("align-ctr");

  //quando da resto 0 resetta i giorni della settimana
  let weekDaysReset = weekDays[(i + 3) % weekDays.length];

  let dayNum = `${i} ${weekDaysReset}`;

  //se il giorno corrente è festivo stampa HOLIDAY altrimenti se è sabato o domenica WEEKEND
  if (i === holidays[0] || i === holidays[1] || i === holidays[2]) {
    squareElem.classList.add("holiday-bg");
    
    dayNum = `HOLIDAY: ${dayNum}`;
  } else if (weekDaysReset === weekDays[5] || weekDaysReset === weekDays[6]) {
    squareElem.classList.add("weekend-bg");

    dayNum = `WEEKEND: ${dayNum}`;
  }
  squareElem.innerHTML = ` 
        <span>${weekDaysReset}</span>
        <span>${i}</span>
    `;

  console.log(dayNum);
  rowElem.append(squareElem);
}
