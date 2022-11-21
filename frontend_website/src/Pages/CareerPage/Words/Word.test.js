import React from "react";
import { render } from "@testing-library/react";
import Word from "./Word";

it("renders correctly", () => {
    const { queryByTestId, } = render(<Word />);

    expect(queryByTestId("career__word")).toBeTruthy();
})
