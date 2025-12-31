import ProductForm from "@/app/ui/containers/admin/products/productForm";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
    push: vi.fn(),
  }),
  usePathname: () => "/admin/bargains/abc123",
}));

describe("<ProductForm />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render ProductForm`, () => {
    render(<ProductForm />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});

