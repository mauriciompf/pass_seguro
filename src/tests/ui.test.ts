import fs from "fs";
import path from "path";
import { describe, it, expect, beforeEach } from "vitest";
import { JSDOM } from "jsdom";
import { fireEvent } from "@testing-library/dom";
import updateRangeSliderPosition from "../ts/handleRangeInput/updateRangeSliderPosition";
import updateReferenceValue from "../ts/handleRangeInput/updateReferenceValue";

const html = fs.readFileSync(
  path.resolve(__dirname, "../../index.html"),
  "utf-8"
);

let dom: any;
let container: HTMLElement;

describe("index.html", () => {
  beforeEach(async () => {
    dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });
    container = dom.window.document.body;
  });

  it("renders update slider reference element according with the range slider input", async () => {
    const sliderReference = container.querySelector(
      ".rangeValue"
    ) as HTMLSpanElement;
    const sliderRange = container.querySelector("#range") as HTMLInputElement;

    sliderRange.onchange = (e) => updateRangeSliderPosition(e, sliderReference);
    sliderRange.onmousemove = (e) =>
      updateRangeSliderPosition(e, sliderReference);

    fireEvent.change(sliderRange, { target: { value: "4" } });
    expect(sliderReference.style.left).toBe("calc(0%)");

    fireEvent.change(sliderRange, { target: { value: "5" } });
    expect(sliderReference.style.left).toBe("calc(12.5%)");
  });

  it("renders update slider reference text element according with slider input", () => {
    const sliderReference = container.querySelector(
      ".rangeValue"
    ) as HTMLSpanElement;
    const sliderRange = container.querySelector("#range") as HTMLInputElement;

    sliderRange.onchange = (e) => updateReferenceValue(e, sliderReference);

    fireEvent.change(sliderRange, { target: { value: "4" } });
    expect(sliderReference.textContent).toBe("4");

    fireEvent.change(sliderRange, { target: { value: "5" } });
    expect(sliderReference.textContent).toBe("5");
  });
});
