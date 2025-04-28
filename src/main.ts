import {
  allFilterButton,
  generatePasswordButton,
  letterFilterButton,
  numberFilterButton,
  rangeInput,
  rangeReference,
  symbolFilterButton,
} from "./ts/constants/htmlElements";
import toggleAllFilters from "./ts/handleFilters/toggleAllFilters";
import toggleFilter from "./ts/utils/toggleFilter";
import toggleLettersFilter from "./ts/handleFilters/toggleLettersFilter";
import generatePassword from "./ts/handleGeneratePassword/generatePassword";
import handleRangeInput from "./ts/handleRangeInput/handleRangeInput";

rangeInput.onchange = (e) => handleRangeInput(e, rangeReference);
rangeInput.onmousemove = (e) => handleRangeInput(e, rangeReference);
generatePasswordButton.onclick = () =>
  generatePassword(Number(rangeInput.value));
numberFilterButton.onclick = () => toggleFilter(numberFilterButton, "numbers");
symbolFilterButton.onclick = () => toggleFilter(symbolFilterButton, "symbols");
letterFilterButton.onclick = () => toggleLettersFilter();
allFilterButton.onclick = () =>
  toggleAllFilters(numberFilterButton, symbolFilterButton, letterFilterButton);
