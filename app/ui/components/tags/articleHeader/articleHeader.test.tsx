import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import ArticleHeader from "./articleHeader";

describe("<ArticleHeader />", () => {
  it(`[${SMOKE_TEST_TAG}] should render ArticleHeader`, () => {
    render(<ArticleHeader text={"example"} />);

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
