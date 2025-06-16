import { SMOKE_TEST_TAG } from "@/tests/testConstants"
import { render, screen } from '@testing-library/react'
import Cookies from "./cookies";

describe("<ConfirmationPopUp />", () => {
    it(`[${SMOKE_TEST_TAG}] should render Cookies`, () => {
        render(<Cookies />)

        expect(screen.getAllByRole("button").length).toBeGreaterThan(0)
    })
})