import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

it("renders correctly", () => {
    const { queryByTestId, } = render(<Header />);

    expect(queryByTestId("coming__header")).toBeTruthy();
})
