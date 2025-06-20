import InDevelopmentMessage from "@/app/ui/components/messages/inDevelopmentMessage/inDevelopmentMessage";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants"
import { render, screen } from '@testing-library/react'

vi.mock("next/navigation", () => ({
    useRouter: () => ({
      refresh: vi.fn(),
    }),
  }));

describe("<InDevelopmentMessage />", () => {
    it(`[${COMPONENT_TEST_TAG}] should render InDevelopmentMessage`, () => {
        render(<InDevelopmentMessage />)

        expect(screen.getByRole("img")).toBeInTheDocument()
    })
})