import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import Certifications from "./certifications";

describe("<Certifications />", () => {
  it(`[${SMOKE_TEST_TAG}] should render Certifications`, () => {
    render(<Certifications />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
