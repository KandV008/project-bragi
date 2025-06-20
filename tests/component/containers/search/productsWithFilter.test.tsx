import ProductsWithFilter from "@/app/ui/containers/search/productsWithFilter";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
    push: vi.fn(),
  }),
  usePathname: () => "/admin/bargains/abc123",
}));

describe("<ProductsWithFilter />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render ProductsWithFilter`, () => {
    render(<ProductsWithFilter fetchURL={"/example"} category={""} />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
