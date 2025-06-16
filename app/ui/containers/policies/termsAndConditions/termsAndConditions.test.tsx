import { SMOKE_TEST_TAG } from "@/tests/testConstants"
import { render, screen } from '@testing-library/react'
import TermsAndConditions from "./termsAndConditions"

describe("<ConfirmationPopUp />", () => {
    it(`[${SMOKE_TEST_TAG}] should render Cookies`, () => {
        render(<TermsAndConditions />)

        expect(screen.getAllByRole("heading").length).toBeGreaterThan(0)
    })
})