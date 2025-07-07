import Certifications from "@/app/ui/containers/main/certifications/certifications";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

describe("<Certifications />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render Certifications`, () => {
    render(<Certifications />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
