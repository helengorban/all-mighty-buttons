// CALENDAR BUTTON

const todayBtn = document.getElementById("today-btn");
todayBtn.addEventListener("click", () => {
  const currentDate = new Date();
  const displayResult = document.getElementById("displayresult");
  displayResult.textContent = currentDate.toDateString();
});

const displayResult = document.querySelector("#displayresult");
const today = document.querySelector("#today-btn");
today.addEventListener("click", todaysdate);
function todaysdate() {
  const todayis = new Date();
  displayResult.textContent = todayis;
  console.log(todayis);
  return result;
}



// FLAME BUTTON

const jaanipaev = document.querySelector(".jaanipaev-btn");
jaanipaev.addEventListener("click", jaanip);
function jaanip() {
  const todayis = new Date();
  const jaanipaev = new Date("2023-06-24");
  const paevadearv = jaanipaev - todayis;
  const uksPaev = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
  const daysUntiljaanipaev = Math.round(Math.abs(paevadearv / uksPaev));
  displayResult.textContent = daysUntiljaanipaev;
  return daysUntiljaanipaev;
}



// MOON BUTTON

const field1 = document.querySelector("#num-1");
const calcDiffbtn = document.querySelector(".diff-calc-btn");
calcDiffbtn.addEventListener("click", diffBetween);
function diffBetween() {
  let number1 = field1.valueAsNumber;
  let diff = 100 - number1;
  if (number1 < 100) {
    displayResult.textContent = diff;
  } else {
    displayResult.textContent = diff * 2;
  }
  // return result
  return result;
}



// HIPPO BUTTON

const hippoButton = document.querySelector(".hippo-btn");
hippoButton.addEventListener("click", hippoFunction);
function hippoFunction() {
  let x = field1.valueAsNumber;
  let y = 5;
  let z = 7;
  let a = x % y;
  let b = x % z;
  if (a > "0" || b < "0") {
    displayResult.textContent = "NO";
  } else {
    displayResult.textContent = "YES";
    return result;
  }
}



// FISH BUTTON

const field2 = document.querySelector("#num-2");
const field3 = document.querySelector("#num-3");
const fishButton = document.querySelector("#fish-btn");
fishButton.addEventListener("click", fishFunction);
const displayMyFishResult = document.querySelector("#displayresult2");
function fishFunction() {
  let esimeneNum = Math.abs(field2.valueAsNumber - 99);
  let teineNum = Math.abs(field3.valueAsNumber - 99);
  if (esimeneNum < teineNum && esimeneNum != teineNum) {
    displayMyFishResult.innerHTML = field2.valueAsNumber;
  } else if (esimeneNum > teineNum && esimeneNum != teineNum) {
    displayMyFishResult.innerHTML = field3.valueAsNumber;
  } else {
    displayMyFishResult.textContent =
      "Oh no! 🤯 It seems like you entered the same numbers.. or didn't enter anything. Please enter different numbers in fields";
  }
}



//  MUG BUTTON

const fieldNr4 = document.querySelector("#field-4");
const mugButton = document.querySelector("#mug-btn");
mugButton.addEventListener("click", mugFunction);
const displayMyMugResult = document.querySelector("#displayresult3");
function mugFunction() {
  let inputtedMugText = fieldNr4.value;
  let firstThreeCharacters = inputtedMugText.slice(0, 3);
  if (inputtedMugText.length < 4) {
    displayMyMugResult.textContent = inputtedMugText.toUpperCase();
  } else {
    displayMyMugResult.textContent =
      firstThreeCharacters.toLowerCase() +
      inputtedMugText.slice(3).toUpperCase();
  }
}
