import { SMOKE_TEST_TAG } from "@/tests/testConstants"
import { render, screen } from '@testing-library/react'
import NotFoundMessage from "./notFoundMessage";

vi.mock("next/navigation", () => ({
    useRouter: () => ({
      refresh: vi.fn(),
    }),
  }));

describe("<NotFoundMessage />", () => {
    it(`[${SMOKE_TEST_TAG}] should render NotFoundMessage`, () => {
        render(<NotFoundMessage />)

        expect(screen.getByRole("img")).toBeInTheDocument()
    })
})