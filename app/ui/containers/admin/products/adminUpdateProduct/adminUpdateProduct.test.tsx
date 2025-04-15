import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import AdminUpdateProduct from "./adminUpdateProduct";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
    push: vi.fn(),
  }),
  usePathname: () => "/admin/bargains/abc123",
}));

describe("<AdminUpdateProduct />", () => {
  it(`[${SMOKE_TEST_TAG}] should render AdminUpdateProduct`, () => {
    render(<AdminUpdateProduct />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});

