import React from "react";
import { render } from "@testing-library/react";
import SignUp from "./SignUp";

it("renders correctly", () => {
    const { queryByTestId, } = render(<SignUp />);

    expect(queryByTestId("career__sign--up")).toBeTruthy();
})
