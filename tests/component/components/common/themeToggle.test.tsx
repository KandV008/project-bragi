import ThemeToggle from "@/app/ui/components/common/themeToggle/themeToggle";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

describe("<ThemeToggle />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render ThemeToggle`, () => {
    render(<ThemeToggle />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
