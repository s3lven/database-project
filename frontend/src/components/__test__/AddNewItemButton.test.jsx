import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AddNewItemButton from "../AddNewItemButton";
import ModalProvider from '../../contexts/ModalContext'

describe("AddNewItemButton", () => {
    it("renders component properly", () => {
        render(
            <ModalProvider>
                <AddNewItemButton />
            </ModalProvider>
)
        const buttonElement = screen.getByRole("button")
        expect(buttonElement).toBeInTheDocument()
    })

})