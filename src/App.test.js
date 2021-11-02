import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

it("render header", () => {
    render(<App />);
    const header = screen.getByText("Emoji Search");
    expect(header).toBeInTheDocument();
});
describe("Emoji list test", () => {
    let list, input;
    beforeEach(() => {
        render(<App />);
    });

    it("render emoji list", () => {
        list = screen.getByTestId("emoji-list");
        expect(list).toBeInTheDocument();
    });
    it("render filtered emoji list", () => {
        input = screen.getByTestId("seacrh-input");
        const emojiTitle = "Yum";
        userEvent.type(input, emojiTitle);
        //seacrh for img alt attribute
        expect(screen.getByAltText(emojiTitle)).toBeInTheDocument();
    });
    it("click button to copy", () => {
        list = screen.getByTestId("emoji-list");
        input = screen.getByTestId("seacrh-input");
        userEvent.click(list.firstElementChild);
        userEvent.paste(input);
        expect(input).toHaveDisplayValue("💯");
    });
});
