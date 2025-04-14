import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import SubHeaderButtons from "./subHeaderButtons";

describe("<SubHeaderButtons />", () => {
  it(`[${SMOKE_TEST_TAG}] should render SubHeaderButtons`, () => {
    render(<SubHeaderButtons />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
