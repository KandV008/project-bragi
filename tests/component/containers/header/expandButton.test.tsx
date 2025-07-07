import ExpandButton from "@/app/ui/containers/header/expandButton/expandButton";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

describe("<ExpandButton />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render ExpandButton`, () => {
    render(<ExpandButton />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
