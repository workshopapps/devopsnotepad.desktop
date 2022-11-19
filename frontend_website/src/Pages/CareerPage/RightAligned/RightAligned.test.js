import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RightAligned from "./RightAligned";

it("renders correctly", async () => {
    const { queryByTestId } = render(<RightAligned />, { wrapper: BrowserRouter });

    expect(queryByTestId("right__aligned")).toBeTruthy();
})
