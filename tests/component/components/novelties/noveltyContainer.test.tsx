import NoveltyContainer from "@/app/ui/components/novelties/noveltyContainer/noveltyContainer";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants"
import { render, screen } from '@testing-library/react'

vi.mock("next/navigation", () => ({
    useRouter: () => ({
      refresh: vi.fn(),
    }),
  }));

describe("<NoveltyContainer />", () => {
    it(`[${COMPONENT_TEST_TAG}] should render NoveltyContainer`, () => {
        render(<NoveltyContainer novelties={[]} showMoreButton={true} />)

        expect(screen.getByRole("button")).toBeInTheDocument()
    })
})