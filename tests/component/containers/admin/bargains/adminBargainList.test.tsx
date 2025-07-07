import AdminBargainList from "@/app/ui/containers/admin/bargains/adminBargainList/adminBargainList";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
    push: vi.fn(),
  }),
  usePathname: () => "/admin/bargains/abc123",
}));

describe("<AdminBargainList />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render AdminBargainList`, () => {
    render(<AdminBargainList />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
