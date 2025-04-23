import generatePassword from "./ts/handleGeneratePassword/generatePassword";
import handleRangeInput from "./ts/handleRangeInput/handleRangeInput";

const rangeInput = document.querySelector("#range") as HTMLInputElement;
const rangeReference = document.querySelector(".rangeValue") as HTMLSpanElement;

const generatePasswordButton = document.querySelector(
  ".generatePasswordBtn"
) as HTMLButtonElement;
const passwordButton = document.querySelector(
  ".passwordBtn"
) as HTMLButtonElement;

const numberFilterButton = document.querySelector(
  ".numberFilter"
) as HTMLButtonElement;
const symbolFilterButton = document.querySelector(
  ".symbolFilter"
) as HTMLButtonElement;
const letterFilterButton = document.querySelector(
  ".LetterFilter"
) as HTMLButtonElement;

const filters: string[] = [];

rangeInput.onchange = (e) => handleRangeInput(e, rangeReference);
rangeInput.onmousemove = (e) => handleRangeInput(e, rangeReference);

window.addEventListener("DOMContentLoaded", () => {
  setFilters("numbers");
});

generatePasswordButton.onclick = () => {
  if (!getFilters()) return;

  generatePassword(Number(rangeInput.value), passwordButton);
};

numberFilterButton.onclick = () => {
  // TODO don't toggle if filters is empty
  numberFilterButton.classList.toggle("opacity-50");

  if (!getFilters().includes("numbers")) {
    setFilters("numbers");
  }

  if (numberFilterButton.classList.contains("opacity-50")) {
    getFilters().splice(filters.indexOf("numbres"), 1);
  }
};

symbolFilterButton.onclick = () => {
  symbolFilterButton.classList.toggle("opacity-50");

  if (!getFilters().includes("symbols")) {
    setFilters("symbols");
  }

  if (symbolFilterButton.classList.contains("opacity-50")) {
    getFilters().splice(filters.indexOf("symbols"), 1);
  }
};

letterFilterButton.onclick = () => {
  letterFilterButton.classList.toggle("opacity-50");

  if (!getFilters().includes("letters")) {
    setFilters("letters");
  }

  if (letterFilterButton.classList.contains("opacity-50")) {
    getFilters().splice(filters.indexOf("letters"), 1);
  }
};

export function setFilters(filter: "numbers" | "symbols" | "letters") {
  return filters.push(filter);
}

export function getFilters() {
  return filters;
}
