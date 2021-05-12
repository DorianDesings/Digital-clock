const firstNumber = document.getElementById('first-number');
const secondNumber = document.getElementById('second-number');
const thirdNumber = document.getElementById('third-number');
const fourthNumber = document.getElementById('fourth-number');
const fifthNumber = document.getElementById('fifth-number');
const sixthNumber = document.getElementById('sixth-number');
const days = document.getElementById('days');

const getDay = () => {
  const today = new Date().getDay();
  days.children[today === 0 ? 6 : today - 1].classList.add('days--active');
};

console.dir(days);

const getNumbers = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hoursArray = hours.toString().split('');
  const minutesArray = minutes.toString().split('');
  const secondsArray = seconds.toString().split('');

  return {
    firstNumber: hours < 10 ? 0 : hoursArray[0],
    secondNumber: hours < 10 ? hoursArray[0] : hoursArray[1],
    thirdNumber: minutes < 10 ? 0 : minutesArray[0],
    fourthNumber: minutes < 10 ? minutesArray[0] : minutesArray[1],
    fifthNumber: seconds < 10 ? 0 : secondsArray[0],
    sixthNumber: seconds < 10 ? secondsArray[0] : secondsArray[1]
  };
};

setInterval(() => {
  const numbers = getNumbers();
  firstNumber.textContent = numbers.firstNumber;
  firstNumber.dataset.time = numbers.firstNumber;
  secondNumber.textContent = numbers.secondNumber;
  secondNumber.dataset.time = numbers.secondNumber;
  thirdNumber.textContent = numbers.thirdNumber;
  thirdNumber.dataset.time = numbers.thirdNumber;
  fourthNumber.textContent = numbers.fourthNumber;
  fourthNumber.dataset.time = numbers.fourthNumber;
  fifthNumber.textContent = numbers.fifthNumber;
  fifthNumber.dataset.time = numbers.fifthNumber;
  sixthNumber.textContent = numbers.sixthNumber;
  sixthNumber.dataset.time = numbers.sixthNumber;
}, 1000);

getDay();
