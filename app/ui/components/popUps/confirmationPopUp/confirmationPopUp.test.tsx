import { SMOKE_TEST_TAG } from "@/tests/testConstants"
import { render, screen } from '@testing-library/react'
import ConfirmationPopUp from "./confirmationPopUp";

vi.mock("next/navigation", () => ({
    useRouter: () => ({
      refresh: vi.fn(),
    }),
  }));

describe("<ConfirmationPopUp />", () => {
    it(`[${SMOKE_TEST_TAG}] should render ConfirmationPopUp`, () => {
        render(<ConfirmationPopUp handleShowModal={function (): void {} } handleAction={function (): void {} } message={"example"} />)

        expect(screen.getAllByRole("button").length).toBeGreaterThan(0)
    })
})