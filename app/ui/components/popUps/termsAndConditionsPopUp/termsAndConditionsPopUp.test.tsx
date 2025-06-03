import { SMOKE_TEST_TAG } from "@/tests/testConstants"
import { render, screen } from '@testing-library/react'
import TermsAndConditionsPopUp from "./termsAndConditionsPopUp";

vi.mock("next/navigation", () => ({
    useRouter: () => ({
      refresh: vi.fn(),
    }),
  }));

describe("<ConfirmationPopUp />", () => {
    it(`[${SMOKE_TEST_TAG}] should render ConfirmationPopUp`, () => {
        render(<TermsAndConditionsPopUp />)

        expect(screen.getAllByRole("button").length).toBeGreaterThan(0)
    })
})