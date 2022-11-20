import React from "react";
import { render } from "@testing-library/react";
import CareerPage from "./CareerPage";

it("renders correctly", () => {
    const { queryByTestId, } = render(<CareerPage />);

    expect(queryByTestId("career__page")).toBeTruthy();
})

// describe("CareerPage.jsx", async () => {
//     let browser;
//     let page;

//     beforeAll(async () => {
//         browser = await puppeteer.launch;
//         page = await browser.newPage();
//     });

//     it("header contains header text", async () => {
//         await page.goto("http://localhost:3000/career");
//         await page.waitForSelector("#career__page");
//         const header = await page.$eval("#header", (e) => e.textContent);
//         expect(header).toBeTruthy();
//     });

//     afterAll(() => browser.close());
// })