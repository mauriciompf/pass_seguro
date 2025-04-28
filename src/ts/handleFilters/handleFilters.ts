import keyboardSymbols from "../constants/keyboardSymbols";
import lowerCaseLetters from "../constants/lowerCaseLetters";
import upperCaseLetters from "../constants/upperCaseLetters";
import getRandom from "../utils/getRandom";

const handleFilters = (filterArray: string, ...filters: any[]) => {
  const [numbers, symbols, letters] = [...filters];

  switch (filterArray) {
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
        letters.push(upperCaseLetters[getRandom(upperCaseLetters.length)]);
      }
      break;
    case "lowercase":
      for (let i = 0; i < 10; i++) {
        letters.push(lowerCaseLetters[getRandom(lowerCaseLetters.length)]);
      }
      break;
  }
};

export default handleFilters;
