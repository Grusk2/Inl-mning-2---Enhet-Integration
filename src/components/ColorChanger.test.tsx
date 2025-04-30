import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ColorChanger from "./ColorChanger";

const getColorBoxBackgroundColor = () => {
  const colorBox = screen.getByTestId("color-box");
  return window.getComputedStyle(colorBox).backgroundColor;
};

describe("ColorChanger", () => {
  it("should start with the first color", () => {
    render(<ColorChanger />);
    const backgroundColor = getColorBoxBackgroundColor();
    expect(backgroundColor).toBe("rgb(255, 0, 0)");
  });

  it("should change to the next color when the button is clicked", () => {
    render(<ColorChanger />);
    const button = screen.getByRole("button");

    fireEvent.click(button);
    let backgroundColor = getColorBoxBackgroundColor();
    expect(backgroundColor).toBe("rgb(0, 128, 0)");

    fireEvent.click(button);
    backgroundColor = getColorBoxBackgroundColor();
    expect(backgroundColor).toBe("rgb(0, 0, 255)");
  });

  it("should cycle back to the first color after the last one", () => {
    render(<ColorChanger />);
    const button = screen.getByRole("button");

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    const backgroundColor = getColorBoxBackgroundColor();
    expect(backgroundColor).toBe("rgb(255, 0, 0)");
  });
});

