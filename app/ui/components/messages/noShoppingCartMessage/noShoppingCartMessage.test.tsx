import { SMOKE_TEST_TAG } from "@/tests/testConstants"
import { render, screen } from '@testing-library/react'
import NoShoppingCartMessage from "./noShoppingCartMessage";

vi.mock("next/navigation", () => ({
    useRouter: () => ({
      refresh: vi.fn(),
    }),
  }));

describe("<NoShoppingCartMessage />", () => {
    it(`[${SMOKE_TEST_TAG}] should render NoShoppingCartMessage`, () => {
        render(<NoShoppingCartMessage />)

        expect(screen.getByRole("img")).toBeInTheDocument()
    })
})