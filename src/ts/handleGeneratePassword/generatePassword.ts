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
const generatePassword = (limit: number, passwordButton: HTMLButtonElement) => {
  const password = [];
  const numbers = [];
  const symbols = [];

  for (let i = 0; i <= limit; i++) {
    numbers.push(getRandom(9));
    symbols.push(keyboardSymbols[getRandom(keyboardSymbols.length)]);
  }

  const concat = numbers.map(String).concat(symbols);

  for (let i = 0; i < concat.length - 1; i++) {
    password.push(concat[getRandom(concat.length)]);

    // Sequencial repetive element
    if (password[i] === password[i - 1]) {
      // Index of repetitive element
      const index = password.indexOf(password[i]);

      // Replace element to a random element
      if (index !== -1) password[i] = concat[getRandom(concat.length)];
    }
  }

  passwordButton.textContent = password.join("");
};

export default generatePassword;
