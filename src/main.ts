import generatePassword from "./ts/handleGeneratePassword/generatePassword";
import handleRangeInput from "./ts/handleRangeInput/handleRangeInput";

type Filters = "numbers" | "symbols" | "uppercase" | "lowercase" | "letters";

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
  ".letterFilter"
) as HTMLButtonElement;

const upperCaseInput = document.querySelector(
  ".upperCaseFilter"
) as HTMLInputElement;
const lowerCaseInput = document.querySelector(
  ".lowerCaseFilter"
) as HTMLInputElement;

const allFilterButton = document.querySelector(
  ".allFilter"
) as HTMLButtonElement;

const showCase = document.querySelector(".showCase") as HTMLElement;

let filters: string[] = [];

rangeInput.onchange = (e) => handleRangeInput(e, rangeReference);
rangeInput.onmousemove = (e) => handleRangeInput(e, rangeReference);

window.addEventListener("DOMContentLoaded", () => {
  setFilters("numbers");
});

generatePasswordButton.onclick = () => {
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

  showCase.classList.toggle("hidden");
  showCase.classList.toggle("grid");

  if (
    !getFilters().includes("uppercase") &&
    !getFilters().includes("lowercase")
  ) {
    setFilters("uppercase");
    setFilters("lowercase");
  }

  if (!lowerCaseInput.checked) {
    getFilters().splice(filters.indexOf("lowercase"), 1);
  }

  if (!upperCaseInput.checked) {
    getFilters().splice(filters.indexOf("uppercase"), 1);
  }

  if (letterFilterButton.classList.contains("opacity-50")) {
    getFilters().splice(filters.indexOf("uppercase"), 1);
    getFilters().splice(filters.indexOf("lowercase"), 1);

    if (!getFilters().includes("numbers")) {
      setFilters("numbers");
    }
  }
};

allFilterButton.onclick = () => {
  const allFilters: Filters[] = [
    "numbers",
    "symbols",
    "uppercase",
    "lowercase",
  ];

  allFilterButton.classList.toggle("opacity-50");

  for (let i = 0; i < allFilters.length; i++) {
    if (!getFilters().includes(allFilters[i])) {
      setFilters(allFilters[i]);
    }

    if (numberFilterButton.classList.contains("opacity-50")) {
      numberFilterButton.classList.remove("opacity-50");
      getFilters().splice(filters.indexOf("numbers"), 1);
    }

    if (symbolFilterButton.classList.contains("opacity-50")) {
      symbolFilterButton.classList.remove("opacity-50");
      getFilters().splice(filters.indexOf("symbols"), 1);
    }

    if (letterFilterButton.classList.contains("opacity-50")) {
      letterFilterButton.classList.remove("opacity-50");
      showCase.classList.remove("hidden");
      showCase.classList.add("grid");

      getFilters().splice(filters.indexOf("uppercase"), 1);
      getFilters().splice(filters.indexOf("lowercase"), 1);

      if (!getFilters().includes("numbers")) {
        setFilters("numbers");
      }
    }

    if (allFilterButton.classList.contains("opacity-50")) {
      showCase.classList.add("hidden");
      showCase.classList.remove("grid");

      symbolFilterButton.classList.add("opacity-50");
      letterFilterButton.classList.add("opacity-50");
    }
  }
};

export function setFilters(filter: Filters) {
  return filters.push(filter);
}

export function getFilters() {
  return filters;
}
