import UnorderedListWithLink from "@/app/ui/components/tags/unorderedListWithLink/unorderedListWithLink";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

describe("<UnorderedListWithLink />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render UnorderedListWithLink`, () => {
    render(<UnorderedListWithLink title={"example"} elements={[]} links={[]} />);

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
