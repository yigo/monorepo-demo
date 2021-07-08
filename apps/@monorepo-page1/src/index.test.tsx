import { render, screen } from "@testing-library/react";
import Component from ".";

test("index", () => {
  render(<Component />);
  expect(screen.getByText("Page1")).toBeInTheDocument();
})