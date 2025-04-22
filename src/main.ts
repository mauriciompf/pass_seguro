import generatePassword from "./ts/handleGeneratePassword/generatePassword";
import handleRangeInput from "./ts/handleRangeInput/handleRangeInput";

const rangeInput = document.querySelector("#range") as HTMLInputElement;
const rangeReference = document.querySelector(".rangeValue") as HTMLSpanElement;
const numberFilterButton = document.querySelector(
  ".numberFilter"
) as HTMLButtonElement;
const symbolFilterButton = document.querySelector(
  ".symbolFilter"
) as HTMLButtonElement;

const generatePasswordButton = document.querySelector(
  ".generatePasswordBtn"
) as HTMLButtonElement;
const passwordButton = document.querySelector(
  ".passwordBtn"
) as HTMLButtonElement;

rangeInput.onchange = (e) => handleRangeInput(e, rangeReference);
rangeInput.onmousemove = (e) => handleRangeInput(e, rangeReference);

generatePasswordButton.onclick = () =>
  generatePassword(Number(rangeInput.value), passwordButton);

symbolFilterButton.onclick = () => {
  symbolFilterButton.classList.toggle("opacity-50");
};
