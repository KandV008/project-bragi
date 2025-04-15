import { SMOKE_TEST_TAG } from "@/tests/testConstants"
import { render, screen } from '@testing-library/react'
import OrderContainer from "./orderContainer";

vi.mock("next/navigation", () => ({
    useRouter: () => ({
      refresh: vi.fn(),
    }),
  }));

describe("<OrderContainer />", () => {
    it(`[${SMOKE_TEST_TAG}] should render OrderContainer`, () => {
        render(<OrderContainer orders={[]} showMoreButton={true} />)

        expect(screen.getByRole("button")).toBeInTheDocument()
    })
})