import WorkingFlow from "@/app/ui/containers/main/workingflow/workingFlow";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

describe("<WorkingFlow />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render WorkingFlow`, () => {
    render(<WorkingFlow />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
