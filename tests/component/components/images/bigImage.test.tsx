import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import BigImage from "../../../../app/ui/components/images/bigImage/bigImage";

describe("<BigImage />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render BigImage`, () => {
    render(<BigImage src={"/no-image.png"} alt={"no-image"} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
