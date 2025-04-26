import generatePassword from "./ts/handleGeneratePassword/generatePassword";
import handleRangeInput from "./ts/handleRangeInput/handleRangeInput";

type Filters = "numbers" | "symbols" | "uppercase" | "lowercase";

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

setFilters("numbers");

const removeElementArrayFilter = (filterName: Filters) =>
  getFilters().splice(getFilters().indexOf(filterName), 1);

generatePasswordButton.onclick = () => {
  if (getFilters().length === 0) {
    toggleFilter(numberFilterButton, "numbers");
  }

  generatePassword(Number(rangeInput.value), passwordButton);
};

const toggleFilter = (btn: HTMLButtonElement, filterName: Filters) => {
  console.log(getFilters());

  btn.classList.toggle("opacity-50");

  if (getFilters().includes(filterName)) {
    removeElementArrayFilter(filterName);
  } else {
    setFilters(filterName);
  }
};

const toggleLettersFilter = () => {
  showCase.classList.toggle("hidden");
  showCase.classList.toggle("grid");

  letterFilterButton.classList.toggle("opacity-50");

  if (
    !getFilters().includes("uppercase") &&
    !getFilters().includes("lowercase")
  ) {
    setFilters("uppercase");
    setFilters("lowercase");
  }

  if (!lowerCaseInput.checked) removeElementArrayFilter("lowercase");
  if (!upperCaseInput.checked) removeElementArrayFilter("uppercase");

  if (!upperCaseInput.checked && !lowerCaseInput.checked) {
    letterFilterButton.classList.add("opacity-50");

    showCase.classList.toggle("hidden");
    showCase.classList.toggle("grid");

    upperCaseInput.checked = true;
    lowerCaseInput.checked = true;
  }
};

const toggleAllFilters = (...filtersButton: HTMLButtonElement[]) => {
  const allFilters: Filters[] = [
    "numbers",
    "symbols",
    "uppercase",
    "lowercase",
  ];

  const elementsFilters = [...filtersButton];

  allFilterButton.classList.toggle("opacity-50");

  for (let i = 0; i < allFilters.length; i++) {
    // Add all filters
    if (!getFilters().includes(allFilters[i])) {
      setFilters(allFilters[i]); // Add all the filters

      elementsFilters.forEach((element) =>
        element.classList.remove("opacity-50")
      );
    } else if (allFilters[i] !== "numbers") {
      removeElementArrayFilter(allFilters[i]);
    }

    // Show letter options
    if (letterFilterButton.classList.contains("opacity-50")) {
      lowerCaseInput.checked = true;
      upperCaseInput.checked = true;

      showCase.classList.remove("hidden");
      showCase.classList.add("grid");
    }

    // Remove all filters
    if (allFilterButton.classList.contains("opacity-50")) {
      // Hide letter options
      showCase.classList.add("hidden");
      showCase.classList.remove("grid");

      elementsFilters.forEach(
        (element) =>
          element !== numberFilterButton && element.classList.add("opacity-50")
      );
    }
  }
};

numberFilterButton.onclick = () => toggleFilter(numberFilterButton, "numbers");
symbolFilterButton.onclick = () => toggleFilter(symbolFilterButton, "symbols");
letterFilterButton.onclick = () => toggleLettersFilter();
allFilterButton.onclick = () =>
  toggleAllFilters(numberFilterButton, symbolFilterButton, letterFilterButton);

export function setFilters(filter: Filters) {
  return filters.push(filter);
}

export function getFilters() {
  return filters;
}

// console.log(getFilters().length);
