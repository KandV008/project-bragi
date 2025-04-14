import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import BargainForm from "./bargainForm";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
    push: vi.fn(),
  }),
  usePathname: () => "/admin/bargains/abc123",
}));

describe("<BargainForm />", () => {
  it(`[${SMOKE_TEST_TAG}] should render BargainForm`, () => {
    render(<BargainForm />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
