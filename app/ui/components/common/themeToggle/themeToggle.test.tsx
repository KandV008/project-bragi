import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import ThemeToggle from "./themeToggle";

describe("<ThemeToggle />", () => {
  it(`[${SMOKE_TEST_TAG}] should render ThemeToggle`, () => {
    render(<ThemeToggle />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
