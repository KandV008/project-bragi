import { SMOKE_TEST_TAG } from "@/tests/testConstants"
import { render, screen } from '@testing-library/react'
import CookiesPopUp from "./cookiesPopUp";

vi.mock("next/navigation", () => ({
    useRouter: () => ({
      refresh: vi.fn(),
    }),
  }));

describe("<ConfirmationPopUp />", () => {
    it(`[${SMOKE_TEST_TAG}] should render ConfirmationPopUp`, () => {
        render(<CookiesPopUp />)

        expect(screen.getAllByRole("button").length).toBeGreaterThan(0)
    })
})