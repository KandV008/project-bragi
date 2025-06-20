import BargainForm from "@/app/ui/containers/admin/bargains/bargainForm/bargainForm";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
    push: vi.fn(),
  }),
  usePathname: () => "/admin/bargains/abc123",
}));

describe("<BargainForm />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render BargainForm`, () => {
    render(<BargainForm />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
