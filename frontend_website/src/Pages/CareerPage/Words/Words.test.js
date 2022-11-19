import React from "react";
import { render } from "@testing-library/react";
import Words from "./Words";

it("renders correctly", () => {
    const { queryByTestId, } = render(<Words />);

    expect(queryByTestId("career__words")).toBeTruthy();
})
