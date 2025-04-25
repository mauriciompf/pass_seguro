import { getFilters } from "../../main";
import getRandom from "../utils/getRandom";

const keyboardSymbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  "|",
  "\\",
  ":",
  ";",
  '"',
  "'",
  "<",
  ",",
  ">",
  ".",
  "?",
  "/",
];

const lowercaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "ç",
];

const uppercaseLetters = lowercaseLetters.map((letters) =>
  letters.toUpperCase()
);

const generatePassword = (limit: number, passwordButton: HTMLButtonElement) => {
  console.log("filters:", getFilters());

  const password: string[] = [];
  const numbers: number[] = [];
  const symbols: string[] = [];
  const letters: string[] = [];

  const filters = (filter: string) => {
    switch (filter) {
      case "numbers":
        for (let i = 0; i < 10; i++) {
          numbers.push(getRandom(9));
        }
        break;
      case "symbols":
        for (let i = 0; i < 10; i++) {
          symbols.push(keyboardSymbols[getRandom(keyboardSymbols.length)]);
        }
        break;
      case "uppercase":
        for (let i = 0; i < 10; i++) {
          letters.push(uppercaseLetters[getRandom(uppercaseLetters.length)]);
        }
        break;
      case "lowercase":
        for (let i = 0; i < 10; i++) {
          letters.push(lowercaseLetters[getRandom(lowercaseLetters.length)]);
        }
        break;
    }
  };

  for (let i = 0; i <= getFilters().length - 1; i++) {
    filters(getFilters()[i]);
  }

  const concatPass = numbers.map(String).concat(symbols, letters);

  for (let i = 0; i < concatPass.length - 1; i++) {
    password.push(concatPass[getRandom(concatPass.length)]);

    // Sequencial repetive element
    if (password[i] === password[i - 1]) {
      // Index of repetitive element
      const index = password.indexOf(password[i]);

      // Replace element to a random element
      if (index !== -1) password[i] = concatPass[getRandom(concatPass.length)];
    }
  }

  passwordButton.textContent = password.slice(0, limit).join("");
  // console.log(password.slice(0, limit).join(""))
};

export default generatePassword;
