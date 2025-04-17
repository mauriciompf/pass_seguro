const rangeInput = document.querySelector("#range") as HTMLInputElement;
const rangeValue = document.querySelector(".rangeValue") as HTMLSpanElement;

const updateRangeSliderPosition = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;

  const max = 12;
  const min = 4;

  const intervalTotal = max - min;
  const relative = Number(value) - min;
  const percentProgress = (relative * 100) / intervalTotal;

  for (let i = min; i <= max; i++) {
    if (Number(value) === i) {
      const alignWithCircle = i - 5 < 0 ? 0 : i - 5;

      rangeValue.style = `left: calc(${percentProgress}% - ${alignWithCircle}%)`;
    }
  }
};

rangeInput.onchange = (e) => updateRangeSliderPosition(e);
rangeInput.onmousemove = (e) => updateRangeSliderPosition(e);
