import { allFilters, filters } from "../constants/globals";
import {
  allFilterButton,
  letterFilterButton,
  lowerCaseInput,
  numberFilterButton,
  upperCaseInput,
} from "../constants/htmlElements";
import removeElementArrayFilter from "./removeElementArrayFilter";

const showCase = document.querySelector(".showCase") as HTMLElement;

const toggleAllFilters = (...filtersButton: HTMLButtonElement[]) => {
  const elementsFilters = [...filtersButton];
  allFilterButton.classList.toggle("opacity-50");

  for (let i = 0; i < allFilters.length; i++) {
    // Add all filters
    if (!filters.includes(allFilters[i])) {
      filters.push(allFilters[i]); // Add all the filters

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

export default toggleAllFilters;
