import React from "react";
import { render } from "@testing-library/react";
import Values from "./Values";

it("renders correctly", () => {
    const { queryByTestId, } = render(<Values />);

    expect(queryByTestId("career__values")).toBeTruthy();
})
