import FormValidationPopUp from "@/app/ui/components/popUps/formValidationPopUp/formValidationPopUp";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants"
import { render, screen } from '@testing-library/react'

vi.mock("next/navigation", () => ({
    useRouter: () => ({
      refresh: vi.fn(),
    }),
  }));

describe("<FormValidationPopUp />", () => {
    it(`[${COMPONENT_TEST_TAG}] should render FormValidationPopUp`, () => {
        render(<FormValidationPopUp handleShowModal={function (): void {} } />)

        expect(screen.getAllByRole("button").length).toBeGreaterThan(0)
    })
})