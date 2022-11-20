import React from "react";
import { render } from "@testing-library/react";
import Integration from "./Integration";

it("renders correctly", () => {
    const { queryByTestId, } = render(<Integration />);

    expect(queryByTestId("integration__container")).toBeTruthy();
})
