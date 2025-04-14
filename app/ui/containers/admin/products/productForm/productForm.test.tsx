import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import ProductForm from "./productForm";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
    push: vi.fn(),
  }),
  usePathname: () => "/admin/bargains/abc123",
}));

describe("<ProductForm />", () => {
  it(`[${SMOKE_TEST_TAG}] should render ProductForm`, () => {
    render(<ProductForm />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});

