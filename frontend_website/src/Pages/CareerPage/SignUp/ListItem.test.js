import React from "react";
import { render } from "@testing-library/react";
import ListItem from "./ListItem";

it("renders correctly", () => {
    const { queryByTestId, } = render(<ListItem />);

    expect(queryByTestId("career__list--item")).toBeTruthy();
})
