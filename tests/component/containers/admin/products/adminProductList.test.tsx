import AdminProductList from "@/app/ui/containers/admin/products/adminProductList/adminProductList";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
    push: vi.fn(),
  }),
  usePathname: () => "/admin/bargains/abc123",
}));

describe("<AdminProductList />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render AdminProductList`, () => {
    render(<AdminProductList />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});

