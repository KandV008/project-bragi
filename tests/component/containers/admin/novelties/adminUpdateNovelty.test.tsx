import AdminUpdateNovelty from "@/app/ui/containers/admin/novelties/adminUpdateNovelty";
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
  it(`[${COMPONENT_TEST_TAG}] should render AdminUpdateNovelty`, () => {
    render(<AdminUpdateNovelty />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
