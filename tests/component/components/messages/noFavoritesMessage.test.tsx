import NoFavoritesMessage from "@/app/ui/components/messages/noFavoritesMessage/noFavoritesMessage";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants"
import { render, screen } from '@testing-library/react'

vi.mock("next/navigation", () => ({
    useRouter: () => ({
      refresh: vi.fn(),
    }),
  }));

describe("<NoFavoritesMessage />", () => {
    it(`[${COMPONENT_TEST_TAG}] should render NoFavoritesMessage`, () => {
        render(<NoFavoritesMessage />)

        expect(screen.getByRole("img")).toBeInTheDocument()
    })
})