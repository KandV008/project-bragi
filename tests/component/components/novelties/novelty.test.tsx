import Novelty from "@/app/ui/components/novelties/novelty/novelty";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants"
import { render, screen } from '@testing-library/react'

vi.mock("next/navigation", () => ({
    useRouter: () => ({
      refresh: vi.fn(),
    }),
  }));

describe("<Novelty />", () => {
    it(`[${COMPONENT_TEST_TAG}] should render Novelty`, () => {
        render(<Novelty id={"123"} title={"example"} description={"example"} promotionalImage={"/no-image.png"} />)

        expect(screen.getAllByText("example").length).toBeGreaterThan(0)
    })
})