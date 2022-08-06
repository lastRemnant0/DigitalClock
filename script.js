const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

//function to update the clock
function updateClock() {
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();
  let ampm = "AM";

  if (hour > 12) {
    hour = hour - 12;
    ampm = "PM";
  }

  // add 0 before when the number is less than 10 to make it two digits
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  hourEl.innerText = hour;
  minutesEl.innerText = minute;
  secondsEl.innerText = second;
  ampmEl.innerText = ampm;

  //update the clock every seconds by calling th function
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
