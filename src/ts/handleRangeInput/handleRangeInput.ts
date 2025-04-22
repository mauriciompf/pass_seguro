import updateRangeSliderPosition from "./updateRangeSliderPosition";
import updateReferenceValue from "./updateReferenceValue";

const handleRangeInput = (e: Event, rangeReference: HTMLElement) => {
  updateRangeSliderPosition(e, rangeReference);
  updateReferenceValue(e, rangeReference);
};

export default handleRangeInput;
