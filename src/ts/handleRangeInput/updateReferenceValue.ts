const updateReferenceValue = (e: Event, rangeReference: HTMLElement) => {
  const value = (e.target as HTMLInputElement).value;
  rangeReference.textContent = value;
};

export default updateReferenceValue;
