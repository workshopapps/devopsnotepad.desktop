import React from "react";
import { render } from "@testing-library/react";
import Openings from "./Openings";

it("renders correctly", () => {
    const { queryByTestId, } = render(<Openings />);

    expect(queryByTestId("opening__list")).toBeTruthy();
})
