import { filters } from "../constants/globals";
import { Filters } from "./definitions";
import removeElementArrayFilter from "../handleFilters/removeElementArrayFilter";

const toggleFilter = (btn: HTMLButtonElement, filterName: Filters) => {
  btn.classList.toggle("opacity-50");

  if (filters.includes(filterName)) {
    removeElementArrayFilter(filterName);
  } else {
    filters.push(filterName);
  }
};

export default toggleFilter;
