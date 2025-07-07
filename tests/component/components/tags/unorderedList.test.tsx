import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import UnorderedList from "../../../../app/ui/components/tags/unorderedList/unorderedList";

describe("<UnorderedList />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render UnorderedList`, () => {
    render(<UnorderedList label={"example"} values={[]}  />);

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
