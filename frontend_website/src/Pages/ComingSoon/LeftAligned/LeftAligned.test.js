import React from "react";
import { render } from "@testing-library/react";
import LeftAligned from "./LeftAligned";

it("renders correctly", () => {
    const { queryByTestId, } = render(<LeftAligned />);

    expect(queryByTestId("coming__left")).toBeTruthy();
})
