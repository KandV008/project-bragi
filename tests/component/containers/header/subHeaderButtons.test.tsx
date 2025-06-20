import SubHeaderButtons from "@/app/ui/containers/header/subHeaderButtons/subHeaderButtons";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

describe("<SubHeaderButtons />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render SubHeaderButtons`, () => {
    render(<SubHeaderButtons />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
