
// date

const date = new Date();
const day = date.getDate();
const month = date.toLocaleString("default", { month: "long" });

const minute = document.getElementById("minutes");

// working out the minutes for the past thirty days

function firstThirtyDays(minutes) {
  let sum = 0;
  let limiter = minutes.length < 30 ? minutes.length : 30;

  for (let i = 0; i < limiter; i++) {
      sum += minutes[i];
  }
  return sum;
}
