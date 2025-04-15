import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import SmallImage from "./smallImage";

describe("<SmallImage />", () => {
  it(`[${SMOKE_TEST_TAG}] should render SmallImage`, () => {
    render(<SmallImage src={"/no-image.png"} alt={"no-image"} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
