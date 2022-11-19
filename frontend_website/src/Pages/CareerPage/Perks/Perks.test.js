import React from "react";
import { render } from "@testing-library/react";
import Perks from "./Perks";

it("renders correctly", () => {
    const { queryByTestId, } = render(<Perks />);

    expect(queryByTestId("perks__list")).toBeTruthy();
})
