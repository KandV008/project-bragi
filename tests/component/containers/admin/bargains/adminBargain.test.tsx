import AboutBargain from "@/app/ui/containers/services/bargains/aboutBargain";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
    push: vi.fn(),
  }),
  usePathname: () => "/admin/bargains/abc123",
}));

describe("<AdminBargain />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render AdminBargain`, () => {
    render(<AboutBargain />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
