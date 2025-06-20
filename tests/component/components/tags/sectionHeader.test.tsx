import SectionHeader from "@/app/ui/components/tags/sectionHeader/sectionHeader";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

describe("<SectionHeader />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render SectionHeader`, () => {
    render(<SectionHeader text={"example"} />);

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
