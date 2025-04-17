const rangeInput = document.querySelector("#range") as HTMLInputElement;
const rangeValue = document.querySelector(".rangeValue") as HTMLSpanElement;

rangeInput.onchange = async (e) => {
  const value = (e.target as HTMLInputElement).value;

  const max = 12;
  const min = 4;
  const totalInterval = max - min;
  const relative = Number(value) - min;

  rangeValue.style = `left: ${(relative * 100) / totalInterval}%`;
};

rangeInput.onmousemove = (e) => {
  //   console.log(e);
  //   rangeInput.classList.add(`before:left-['${e.clientX}']`);
};
