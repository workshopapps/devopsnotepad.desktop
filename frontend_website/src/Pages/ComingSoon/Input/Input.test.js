import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Input from "./Input";

it("renders correctly", () => {
    const { queryByTestId } = render(<Input />);

    expect(queryByTestId("input")).toBeTruthy();
})


describe("Input value", () => {
    it("updates on change", () => {
        const { getByLabelText } = render(<Input />);

        const searchInput = getByLabelText("input");

        fireEvent.change(searchInput, { target: { value: "test" } });

        expect(searchInput.value).toBe("test");
    })
})
