// Countdown Timer
let countDownDate = new Date("June 16, 2024 18:59:59").getTime("June 16, 2024 22:59:59");
let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();
  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;
  // Get Time Units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  // Add leading zeros if necessary
  days = days < 10 ? `0${days}` : days;
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

// Animate Width On Scrolling
// Increase Numbers On Scrolling
let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");

let nums = document.querySelectorAll(".trophies .number");
let statsSection = document.querySelector(".trophies");
let started = false; // Function Started ? No

window.onscroll = function () {
  // Skills Animate Width
  if (window.scrollY >= section.offsetTop - 120) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }

  // Stats Increase Number
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
