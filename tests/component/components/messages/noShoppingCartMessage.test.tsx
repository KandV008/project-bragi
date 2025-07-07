import NoShoppingCartMessage from "@/app/ui/components/messages/noShoppingCartMessage/noShoppingCartMessage";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants"
import { render, screen } from '@testing-library/react'

vi.mock("next/navigation", () => ({
    useRouter: () => ({
      refresh: vi.fn(),
    }),
  }));

describe("<NoShoppingCartMessage />", () => {
    it(`[${COMPONENT_TEST_TAG}] should render NoShoppingCartMessage`, () => {
        render(<NoShoppingCartMessage />)

        expect(screen.getByRole("img")).toBeInTheDocument()
    })
})