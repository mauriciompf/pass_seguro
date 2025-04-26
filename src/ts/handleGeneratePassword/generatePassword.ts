import { filters, letters, numbers, symbols } from "../constants/globals";
import { numberFilterButton, passwordButton } from "../constants/htmlElements";
import handleFilters from "../handleFilters/handleFilters";
import getRandom from "../utils/getRandom";

const generatePassword = (limit: number) => {
  const password: string[] = [];

  // Insert default filter if filters array is empty
  if (filters.length < 1) {
    numberFilterButton.classList.toggle("opacity-50");
    filters.push("numbers");
  }

  for (let i = 0; i <= filters.length - 1; i++) {
    handleFilters(filters[i]);
  }

  const concatPass = numbers.map(String).concat(symbols, letters);

  // Combine filters
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

  const formatPassword = password.slice(0, limit);
  passwordButton.textContent = formatPassword.join("");
};

export default generatePassword;
