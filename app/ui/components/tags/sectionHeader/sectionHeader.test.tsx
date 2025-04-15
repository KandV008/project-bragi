import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import SectionHeader from "./sectionHeader";

describe("<SectionHeader />", () => {
  it(`[${SMOKE_TEST_TAG}] should render SectionHeader`, () => {
    render(<SectionHeader text={"example"} />);

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
