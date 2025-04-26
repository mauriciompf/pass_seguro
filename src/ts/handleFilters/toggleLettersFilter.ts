import { filters } from "../constants/globals";
import removeElementArrayFilter from "./removeElementArrayFilter";

const letterFilterButton = document.querySelector(
  ".letterFilter"
) as HTMLButtonElement;

const upperCaseInput = document.querySelector(
  ".upperCaseFilter"
) as HTMLInputElement;
const lowerCaseInput = document.querySelector(
  ".lowerCaseFilter"
) as HTMLInputElement;

const showCase = document.querySelector(".showCase") as HTMLElement;

const toggleLettersFilter = () => {
  showCase.classList.toggle("hidden");
  showCase.classList.toggle("grid");

  letterFilterButton.classList.toggle("opacity-50");

  if (!filters.includes("uppercase") && !filters.includes("lowercase")) {
    filters.push("uppercase");
    filters.push("lowercase");
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

  if (letterFilterButton.classList.contains("opacity-50")) {
    removeElementArrayFilter("lowercase");
    removeElementArrayFilter("uppercase");
  }
};

export default toggleLettersFilter;
