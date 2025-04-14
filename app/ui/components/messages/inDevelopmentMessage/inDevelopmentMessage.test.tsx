import { SMOKE_TEST_TAG } from "@/tests/testConstants"
import { render, screen } from '@testing-library/react'
import InDevelopmentMessage from "./inDevelopmentMessage"

vi.mock("next/navigation", () => ({
    useRouter: () => ({
      refresh: vi.fn(),
    }),
  }));

describe("<InDevelopmentMessage />", () => {
    it(`[${SMOKE_TEST_TAG}] should render InDevelopmentMessage`, () => {
        render(<InDevelopmentMessage />)

        expect(screen.getByRole("img")).toBeInTheDocument()
    })
})