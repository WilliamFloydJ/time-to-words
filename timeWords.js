const hours = [
  "twelve",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
];

const tens = ["", "", "twenty", "thirty", "fourty", "fifty"];

const ones = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const timeWords = (time) => {
  let timeStr = "";
  if (time === "12:00") {
    return "Noon";
  }
  if (time === "00:00") {
    return "Midnight";
  }
  let timeSplit = time.split(":");
  let hour = parseInt(timeSplit[0]);
  let Am = true;
  if (hour > 11) {
    Am = false;
  } else {
    Am = true;
  }
  if (hour > 12) {
    hour -= 12;
  }
  let minute = timeSplit[1];
  let ten = minute.split("");
  ten[0] = parseInt(ten[0]);
  ten[1] = parseInt(ten[1]);
  if (hour === 12) {
    timeStr += hours[0];
  } else {
    timeStr += hours[hour];
  }
  if (parseInt(minute) === 0) {
    timeStr += ` o'clock`;
  }
  if (ten[0] === 0) {
    timeStr += ` o' ${ones[ten[1]]}`;
  } else if (ten[0] === 1) {
    timeStr += ` ${ones[minute]}`;
  } else {
    timeStr += ` ${tens[ten[0]]} ${ones[ten[1]]}`;
  }
  if (Am) {
    timeStr += " am";
  } else {
    timeStr += " pm";
  }
  return timeStr;
};

console.log(timeWords("23:09"));
