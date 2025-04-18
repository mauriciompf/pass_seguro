import updateRangeSliderPosition from "./ts/updateRangeSliderPosition";

const rangeInput = document.querySelector("#range") as HTMLInputElement;
const rangeSlider = document.querySelector(".rangeValue") as HTMLSpanElement;

rangeInput.onchange = (e) => updateRangeSliderPosition(e, rangeSlider);
rangeInput.onmousemove = (e) => updateRangeSliderPosition(e, rangeSlider);
