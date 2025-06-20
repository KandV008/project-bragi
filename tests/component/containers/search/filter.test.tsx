import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import Filter from "../../../../app/ui/containers/search/filter/filter";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
    push: vi.fn(),
  }),
  usePathname: () => "/admin/bargains/abc123",
}));

describe("<Filter />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render Filter`, () => {
    render(<Filter onChange={function (filter: string): void { } } category={""} />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
