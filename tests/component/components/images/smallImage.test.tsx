import SmallImage from "@/app/ui/components/images/smallImage/smallImage";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

describe("<SmallImage />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render SmallImage`, () => {
    render(<SmallImage src={"/no-image.png"} alt={"no-image"} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
