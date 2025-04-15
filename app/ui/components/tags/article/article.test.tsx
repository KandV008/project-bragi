import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import { Article } from "./article";

describe("<Article />", () => {
  it(`[${SMOKE_TEST_TAG}] should render Article`, () => {
    render(<Article label={"example"} value={"example"} />);

    expect(screen.getByRole("article")).toBeInTheDocument();
  });
});
