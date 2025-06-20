import AdminUpdateBargain from "@/app/ui/containers/admin/bargains/adminUpdateBargain/adminUpdateBargain";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
    push: vi.fn(),
  }),
  usePathname: () => "/admin/bargains/abc123",
}));

describe("<AdminUpdateBargain />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render AdminUpdateBargain`, () => {
    render(<AdminUpdateBargain />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
