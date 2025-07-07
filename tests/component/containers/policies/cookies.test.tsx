import Cookies from "@/app/ui/containers/policies/cookies/cookies"
import { COMPONENT_TEST_TAG } from "@/tests/testConstants"
import { render, screen } from '@testing-library/react'

describe("<ConfirmationPopUp />", () => {
    it(`[${COMPONENT_TEST_TAG}] should render Cookies`, () => {
        render(<Cookies />)

        expect(screen.getAllByRole("button").length).toBeGreaterThan(0)
    })
})