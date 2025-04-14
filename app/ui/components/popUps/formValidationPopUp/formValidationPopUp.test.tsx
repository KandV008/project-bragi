import { SMOKE_TEST_TAG } from "@/tests/testConstants"
import { render, screen } from '@testing-library/react'
import FormValidationPopUp from "./formValidationPopUp";

vi.mock("next/navigation", () => ({
    useRouter: () => ({
      refresh: vi.fn(),
    }),
  }));

describe("<FormValidationPopUp />", () => {
    it(`[${SMOKE_TEST_TAG}] should render FormValidationPopUp`, () => {
        render(<FormValidationPopUp handleShowModal={function (): void {} } />)

        expect(screen.getAllByRole("button").length).toBeGreaterThan(0)
    })
})