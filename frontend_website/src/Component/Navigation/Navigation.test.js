import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";
import Navigation from "./Navigation";

it("renders correctly", () => {
    const { queryByTestId, } = render(<Navigation />);

    expect(queryByTestId("navigation__container")).toBeTruthy();
})
