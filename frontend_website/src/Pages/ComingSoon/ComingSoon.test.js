import React from "react";
import { render } from "@testing-library/react";
import ComingSoon from "./ComingSoon";

it("renders correctly", () => {
    const { queryByTestId, } = render(<ComingSoon />);

    expect(queryByTestId("coming__header")).toBeTruthy();
})
