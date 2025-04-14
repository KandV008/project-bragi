import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import AdminProductList from "./adminProductList";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
    push: vi.fn(),
  }),
  usePathname: () => "/admin/bargains/abc123",
}));

describe("<AdminProductList />", () => {
  it(`[${SMOKE_TEST_TAG}] should render AdminProductList`, () => {
    render(<AdminProductList />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});

