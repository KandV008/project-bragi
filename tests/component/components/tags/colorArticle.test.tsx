import { ColorArticle } from "@/app/ui/components/tags/colorArticle/colorArticle";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

describe("<ColorArticle />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render ColorArticle`, () => {
    render(<ColorArticle label={"example"} colors={[]}  />);

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
