const rangeInput = document.querySelector("#range") as HTMLInputElement;
const rangeReference = document.querySelector(".rangeValue") as HTMLSpanElement;
const generatePasswordButton = document.querySelector(
  ".generatePasswordBtn"
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
const allFilterButton = document.querySelector(
  ".allFilter"
) as HTMLButtonElement;
const upperCaseInput = document.querySelector(
  ".upperCaseFilter"
) as HTMLInputElement;
const lowerCaseInput = document.querySelector(
  ".lowerCaseFilter"
) as HTMLInputElement;
const passwordButton = document.querySelector(
  ".passwordBtn"
) as HTMLButtonElement;

export {
  rangeInput,
  rangeReference,
  generatePasswordButton,
  numberFilterButton,
  symbolFilterButton,
  letterFilterButton,
  allFilterButton,
  upperCaseInput,
  lowerCaseInput,
  passwordButton,
};
