import React from "react";
import { render } from "@testing-library/react";
import Perk from "./Perk";

it("renders correctly", () => {
    const { queryByTestId, } = render(<Perk />);

    expect(queryByTestId("perk__item")).toBeTruthy();
})
