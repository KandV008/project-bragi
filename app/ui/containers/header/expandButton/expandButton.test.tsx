import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import ExpandButton from "./expandButton";

describe("<ExpandButton />", () => {
  it(`[${SMOKE_TEST_TAG}] should render ExpandButton`, () => {
    render(<ExpandButton />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
