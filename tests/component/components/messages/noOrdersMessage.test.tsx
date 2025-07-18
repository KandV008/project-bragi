import NoOrdersMessage from "@/app/ui/components/messages/noOrdersMessage/noOrdersMessage";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants"
import { render, screen } from '@testing-library/react'

vi.mock("next/navigation", () => ({
    useRouter: () => ({
      refresh: vi.fn(),
    }),
  }));

describe("<NoFavoritesMessage />", () => {
    it(`[${COMPONENT_TEST_TAG}] should render NoFavoritesMessage`, () => {
        render(<NoOrdersMessage />)

        expect(screen.getByRole("img")).toBeInTheDocument()
    })
})