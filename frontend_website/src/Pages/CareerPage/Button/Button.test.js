import React from "react";
import { render, } from "@testing-library/react";
import Button from "./Button";

it("renders correctly", () => {
    const { queryByTestId, } = render(<Button />);

    expect(queryByTestId("button")).toBeTruthy();
})

describe("Input value", () => {
    it("updates on change", () => {

        const onChange = jest.fn();
        const { queryByTestId } = render(<Input />);

        const submitButton = queryByTestId("button");

        fireEvent.change(submitButton);

        expect(onChange).toBe("test");
    })
})