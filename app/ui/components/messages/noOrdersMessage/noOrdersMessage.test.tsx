import { SMOKE_TEST_TAG } from "@/tests/testConstants"
import { render, screen } from '@testing-library/react'
import NoOrdersMessage from "./noOrdersMessage";

vi.mock("next/navigation", () => ({
    useRouter: () => ({
      refresh: vi.fn(),
    }),
  }));

describe("<NoFavoritesMessage />", () => {
    it(`[${SMOKE_TEST_TAG}] should render NoFavoritesMessage`, () => {
        render(<NoOrdersMessage />)

        expect(screen.getByRole("img")).toBeInTheDocument()
    })
})