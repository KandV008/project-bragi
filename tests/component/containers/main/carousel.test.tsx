import CarouselWithAction from "@/app/ui/containers/main/carousel/carousel";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

describe("<CarouselWithAction />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render CarouselWithAction`, () => {
    render(<CarouselWithAction />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
