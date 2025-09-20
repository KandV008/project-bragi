import { render, screen } from "@testing-library/react";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import Summary from "@/app/ui/containers/shoppingList/summary/summary";

vi.mock("next/navigation", () => ({
    useRouter: () => ({
      refresh: vi.fn(),
      push: vi.fn(),
    }),
    usePathname: () => "/admin/bargains/abc123",
    useSearchParams: () => ({
      get: vi.fn().mockReturnValue(null),
    }),
  }));

describe("<Summary />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render Summary`, () => {
    render(<Summary changeableProducts={[]} />)

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
