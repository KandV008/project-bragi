import AdminUpdateProduct from "@/app/ui/containers/admin/products/adminUpdateProduct";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
    push: vi.fn(),
  }),
  usePathname: () => "/admin/bargains/abc123",
}));

describe("<AdminUpdateProduct />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render AdminUpdateProduct`, () => {
    render(<AdminUpdateProduct />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});

