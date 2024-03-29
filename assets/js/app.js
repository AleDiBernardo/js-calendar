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

//la settimana inizia da venerdì 1 con indice 4

for (let i = 1; i <= 31; i++) {

  //quando da resto 0 resetta i giorni della settimana
  let weekDaysReset = weekDays[(i + 3) % 7];
  let dayNum;

  //se il giorno corrente è festivo stampa HOLIDAY
  if (i === holidays[0] || i === holidays[1] || i === holidays[2]) {
    dayNum = `HOLIDAY: ${i} ${weekDaysReset}`;

  } else if (weekDaysReset === weekDays[5] || weekDaysReset === weekDays[6]) {
    dayNum = `WEEKEND: ${i} ${weekDaysReset}`;

  } else {
    dayNum = `${i} ${weekDaysReset}`;
  }

  console.log(dayNum);
}
