
// date

let date = new Date();
let day = date.getDate();

let incrementer = 1000*60*60*24;

const minute = document.getElementById("minutes");
const credit = document.getElementById("credits");

// working out the minutes for the past thirty days

function firstThirtyDays(minutes) {
  let sum = 0;
  let limiter = minutes.length < 30 ? minutes.length : 30;

  for (let i = 0; i < limiter; i++) {
      sum += minutes[i];
  }
  return sum;
}

// GitPod availability in minutes

const gitpodUsage = array => {
  return (50 * 60) - firstThirtyDays(array);
}

// check if the array needs resetting

const resetCheck = array => {

  if (array.reduce((acc, el) => acc + el, 0) === 0) {

    alert("Please reset the gitpodMinutes array");
    minute.innerText = "Please reset the gitpodMinutes array";

  } else if (array.reduce((acc, el) => acc + el, 0) > 0) {

      let counter = 30;

      while (counter > 0) {

        minute.innerHTML += `<span>
        <article>${date.getDate()} ${date.toLocaleString("default", { month: "long" })}</article>
        <article>Hours: ${Math.floor(gitpodUsage(array) / 60)}</article>
        <article>Minutes: ${Math.floor(((gitpodUsage(array) / 60) - Math.floor(gitpodUsage(array) / 60)) * 60)}</article>
        <article>Credits: ${Math.floor(gitpodUsage(array) / 6)}</article>
        </span>`;

        array.unshift(0);
        counter--;
        date += incrementer;

      }

   } else {

    alert("Please make sure the gitpodMinutes array only contains positive numbers");

  }

}

resetCheck(gitpodMinutes);
