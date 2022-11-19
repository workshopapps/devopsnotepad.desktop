import React from "react";
import { render } from "@testing-library/react";
import Opening from "./Opening";

it("renders correctly", () => {
    const { queryByTestId, } = render(<Opening />);

    expect(queryByTestId("opening__item")).toBeTruthy();
})
