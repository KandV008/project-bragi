import Logo from "@/app/ui/components/common/logo/logo";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
  }),
}));

describe("<Logo />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render Logo`, () => {
    render(<Logo />);

    expect(screen.getByRole("link")).toBeInTheDocument();
  });
});
