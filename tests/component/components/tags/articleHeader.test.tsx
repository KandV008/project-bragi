import ArticleHeader from "@/app/ui/components/tags/articleHeader/articleHeader";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

describe("<ArticleHeader />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render ArticleHeader`, () => {
    render(<ArticleHeader text={"example"} />);

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
