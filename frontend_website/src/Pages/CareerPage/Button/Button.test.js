import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

it("renders correctly", () => {
    const { queryByTestId, } = render(<Button />);

    expect(queryByTestId("button")).toBeTruthy();
})

describe(" Button onClick event", () => {
    it("trigger onClick function on click", () => {

        const onClick = jest.fn();
        const { queryByTestId } = render(<Button onClick={onClick} />);

        const submitButton = queryByTestId("button");

        fireEvent.click(submitButton);

        expect(onClick).toHaveBeenCalled();
    })
})
