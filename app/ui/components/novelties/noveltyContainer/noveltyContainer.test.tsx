import { SMOKE_TEST_TAG } from "@/tests/testConstants"
import { render, screen } from '@testing-library/react'
import NoveltyContainer from "./noveltyContainer";

vi.mock("next/navigation", () => ({
    useRouter: () => ({
      refresh: vi.fn(),
    }),
  }));

describe("<NoveltyContainer />", () => {
    it(`[${SMOKE_TEST_TAG}] should render NoveltyContainer`, () => {
        render(<NoveltyContainer novelties={[]} showMoreButton={true} />)

        expect(screen.getByRole("button")).toBeInTheDocument()
    })
})