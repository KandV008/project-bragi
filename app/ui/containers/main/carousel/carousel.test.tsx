import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import CarouselWithAction from "./carousel";

describe("<CarouselWithAction />", () => {
  it(`[${SMOKE_TEST_TAG}] should render CarouselWithAction`, () => {
    render(<CarouselWithAction />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
