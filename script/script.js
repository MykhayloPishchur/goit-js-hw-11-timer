const CountdownTimer = function ({ selector, targetDate }) {
  let id = document.querySelector(selector);
  let innerDays = id.querySelector(`[data-value="days"]`);
  let innerHours = id.querySelector(`[data-value="hours"]`);
  let innerMins = id.querySelector(`[data-value="mins"]`);
  let innerSecs = id.querySelector(`[data-value="secs"]`);

  setInterval(() => {
    const time = targetDate - Date.now();
    if (time < 0) {
      document.querySelector(`${selector}`).innerHTML = "EXPIRED";
    }
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    innerDays.textContent = days;

    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    innerHours.textContent = hours;

    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    innerMins.textContent = mins;

    const secs = Math.floor((time % (1000 * 60)) / 1000);
    innerSecs.textContent = secs;
  }, 1000);
};

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("May 1, 2020"),
});
