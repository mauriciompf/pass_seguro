import handleRangeInput from "./ts/handleRangeInput/handleRangeInput";

const rangeInput = document.querySelector("#range") as HTMLInputElement;
const rangeReference = document.querySelector(".rangeValue") as HTMLSpanElement;

const generatePasswordButton = document.querySelector(
  ".generatePasswordBtn"
) as HTMLButtonElement;
const passwordButton = document.querySelector(
  ".passwordBtn"
) as HTMLButtonElement;

const randomNumber = (limit: number) => {
  const password = [];

  const generateNumber = () => {
    return Math.floor(Math.random() * 9);
  };

  for (let i = 0; i <= limit; i++) {
    password.push(generateNumber());
  }

  return password.join("");
};

generatePasswordButton.addEventListener("click", () => {
  passwordButton.innerHTML = randomNumber(4);
});

rangeInput.onchange = (e) => handleRangeInput(e, rangeReference);
rangeInput.onmousemove = (e) => handleRangeInput(e, rangeReference);
