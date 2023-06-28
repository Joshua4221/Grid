import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { WhyUsSection } from "./index";

test("get all mobile links", () => {
  render(
    <BrowserRouter>
      <WhyUsSection />
    </BrowserRouter>,
  );
  const allHeaders = screen.getAllByRole("header");
  const text = screen.getByText(
    /We strive to give our clients top-notch solutions to their software development needs.We build products that are scalable, funtional and efficient/i,
  );
  expect(allHeaders.length).toBeGreaterThanOrEqual(1);
  expect(text).toBeInTheDocument();
});
