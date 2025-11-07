import AboutNovelty from "@/app/ui/containers/services/novelties/aboutNovelty";
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
    render(<AboutNovelty />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
