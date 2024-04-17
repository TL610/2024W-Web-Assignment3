/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

let costPerDay = 0;
let numberOfDaysSelected = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function mondayClicked() {
  let monday = document.getElementById("monday");
  if (monday.classList.contains("clicked")) {
    return;
  } else {
    monday.classList.add("clicked");
    numberOfDaysSelected++;
  }
  calculate();
}
monday.addEventListener("click", mondayClicked);

function tuesdayClicked() {
  let tuesday = document.getElementById("tuesday");
  if (tuesday.classList.contains("clicked")) {
    return;
  } else {
    tuesday.classList.add("clicked");
    numberOfDaysSelected++;
  }
  calculate();
}
tuesday.addEventListener("click", tuesdayClicked);

function wednesdayClicked() {
  let wednesday = document.getElementById("wednesday");
  if (wednesday.classList.contains("clicked")) {
    return;
  } else {
    wednesday.classList.add("clicked");
    numberOfDaysSelected++;
  }
  calculate();
}
wednesday.addEventListener("click", wednesdayClicked);

function thursdayClicked() {
  let thursday = document.getElementById("thursday");
  if (thursday.classList.contains("clicked")) {
    return;
  } else {
    thursday.classList.add("clicked");
    numberOfDaysSelected++;
  }
  calculate();
}
thursday.addEventListener("click", thursdayClicked);

function fridayClicked() {
  let friday = document.getElementById("friday");
  if (friday.classList.contains("clicked")) {
    return;
  } else {
    friday.classList.add("clicked");
    numberOfDaysSelected++;
  }
  calculate();
}
friday.addEventListener("click", fridayClicked);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

let clearButton = document.getElementById("clear-button");
function clearDays() {
  monday.classList.remove("clicked");
  tuesday.classList.remove("clicked");
  wednesday.classList.remove("clicked");
  thursday.classList.remove("clicked");
  friday.classList.remove("clicked");
  numberOfDaysSelected = 0;
  costPerDay = 0;
  calculate();
}
clearButton.addEventListener("click", clearDays);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

let halfDayButton = document.getElementById("half");
let fullDayButton = document.getElementById("full");
function halfDay() {
  costPerDay = 20;
  halfDayButton.classList.add("clicked");
  fullDayButton.classList.remove("clicked");
  calculate();
}
halfDayButton.addEventListener("click", halfDay);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullDay() {
  costPerDay = 35;
  fullDayButton.classList.add("clicked");
  halfDayButton.classList.remove("clicked");
  calculate();
}
fullDayButton.addEventListener("click", fullDay);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
  let totalCost = costPerDay * numberOfDaysSelected;
  document.getElementById("calculated-cost").innerHTML = totalCost;
}
