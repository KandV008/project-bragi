import { Article } from "@/app/ui/components/tags/article/article";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

describe("<Article />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render Article`, () => {
    render(<Article label={"example"} value={"example"} />);

    expect(screen.getByRole("article")).toBeInTheDocument();
  });
});
