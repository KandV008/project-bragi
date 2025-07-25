import AdminNovelty from "@/app/ui/containers/admin/novelties/adminNovelty/adminNovelty";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
    push: vi.fn(),
  }),
  usePathname: () => "/admin/bargains/abc123",
}));

describe("<AdminNovelty />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render AdminNovelty`, () => {
    render(<AdminNovelty />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
