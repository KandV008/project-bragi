import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import AdminNoveltyList from "./adminNoveltyList";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
    push: vi.fn(),
  }),
  usePathname: () => "/admin/bargains/abc123",
}));

describe("<AdminNoveltyList />", () => {
  it(`[${SMOKE_TEST_TAG}] should render AdminNoveltyList`, () => {
    render(<AdminNoveltyList />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
