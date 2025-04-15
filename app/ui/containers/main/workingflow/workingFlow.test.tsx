import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import WorkingFlow from "./workingFlow";

describe("<WorkingFlow />", () => {
  it(`[${SMOKE_TEST_TAG}] should render WorkingFlow`, () => {
    render(<WorkingFlow />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
