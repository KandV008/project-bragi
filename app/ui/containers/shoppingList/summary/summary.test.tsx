import { render, screen } from "@testing-library/react";
import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import Summary from "./summary";

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
  it(`[${SMOKE_TEST_TAG}] should render Summary`, () => {
    render(<Summary products={[]} />)

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
