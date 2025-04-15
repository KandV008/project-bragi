import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import { ColorArticle } from "./colorArticle";

describe("<ColorArticle />", () => {
  it(`[${SMOKE_TEST_TAG}] should render ColorArticle`, () => {
    render(<ColorArticle label={"example"} colors={[]}  />);

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
