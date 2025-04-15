import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import ProductsWithFilter from "./productsWithFilter";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
    push: vi.fn(),
  }),
  usePathname: () => "/admin/bargains/abc123",
}));

describe("<ProductsWithFilter />", () => {
  it(`[${SMOKE_TEST_TAG}] should render ProductsWithFilter`, () => {
    render(<ProductsWithFilter fetchURL={"/example"} />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
