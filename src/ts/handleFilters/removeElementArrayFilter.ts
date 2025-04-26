import { filters } from "../constants/globals";
import { Filters } from "../utils/definitions";

const removeElementArrayFilter = (filterName: Filters) =>
  filters.splice(filters.indexOf(filterName), 1);

export default removeElementArrayFilter;
