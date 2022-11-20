import React from "react";
import { render } from "@testing-library/react";
import Form from "./Form";

it("renders correctly", () => {
    const { queryByTestId, } = render(<Form />);

    expect(queryByTestId("login__form")).toBeTruthy();
})
