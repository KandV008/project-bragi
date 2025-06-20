import TermsAndConditions from "@/app/ui/containers/policies/termsAndConditions/termsAndConditions"
import { COMPONENT_TEST_TAG } from "@/tests/testConstants"
import { render, screen } from '@testing-library/react'

describe("<ConfirmationPopUp />", () => {
    it(`[${COMPONENT_TEST_TAG}] should render Cookies`, () => {
        render(<TermsAndConditions />)

        expect(screen.getAllByRole("heading").length).toBeGreaterThan(0)
    })
})