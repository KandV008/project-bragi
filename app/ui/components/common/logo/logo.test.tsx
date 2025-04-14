import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import Logo from "./logo";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
  }),
}));

describe("<Logo />", () => {
  it(`[${SMOKE_TEST_TAG}] should render Logo`, () => {
    render(<Logo />);

    expect(screen.getByRole("link")).toBeInTheDocument();
  });
});
