import React from "react";
import { render } from "@testing-library/react";
import RightAligned from "./RightAligned";

it("renders correctly", () => {
    const { queryByTestId, } = render(<RightAligned />);

    expect(queryByTestId("coming__right")).toBeTruthy();
})
