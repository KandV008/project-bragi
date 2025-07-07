import Order from "@/app/ui/components/orders/order/order";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants"
import { render, screen } from '@testing-library/react'

vi.mock("next/navigation", () => ({
    useRouter: () => ({
      refresh: vi.fn(),
    }),
  }));

describe("<Order />", () => {
    it(`[${COMPONENT_TEST_TAG}] should render Order`, () => {
        render(<Order id={"123"} address={"example"} totalPrice={0} creationDate={new Date().toISOString()}  />)

        expect(screen.getByRole("link")).toBeInTheDocument()
    })
})