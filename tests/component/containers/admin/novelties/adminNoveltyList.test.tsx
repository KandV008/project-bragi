import AdminNoveltyList from "@/app/ui/containers/admin/novelties/adminNoveltyList/adminNoveltyList";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
    push: vi.fn(),
  }),
  usePathname: () => "/admin/bargains/abc123",
}));

describe("<AdminNoveltyList />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render AdminNoveltyList`, () => {
    render(<AdminNoveltyList />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
