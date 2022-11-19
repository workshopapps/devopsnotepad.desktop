import React from "react";
import { render } from "@testing-library/react";
import Input from "./Input";

it("renders correctly", () => {
    const { queryByTestId, } = render(<Input />);

    expect(queryByTestId("login__input")).toBeTruthy();
})