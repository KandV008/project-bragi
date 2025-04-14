import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import UnorderedListWithLink from "./unorderedListWithLink";

describe("<UnorderedListWithLink />", () => {
  it(`[${SMOKE_TEST_TAG}] should render UnorderedListWithLink`, () => {
    render(<UnorderedListWithLink title={"example"} elements={[]} links={[]} />);

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
