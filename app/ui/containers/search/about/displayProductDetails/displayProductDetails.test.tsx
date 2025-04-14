import { render, screen } from "@testing-library/react";
import DisplayProductDetails from "./displayProductDetails";
import { SMOKE_TEST_TAG } from "@/tests/testConstants";

describe("<DisplayProductDetails />", () => {
  const exampleDescription: string =
    "Example plus example plus example plus...";

  it(`[${SMOKE_TEST_TAG}] should render DisplayProductDetails as a ACCESSORY with description`, () => {
    render(
      <DisplayProductDetails
        description={exampleDescription}
        earphoneAttributes={null}
      />
    );

    const description = screen.getByText(exampleDescription);
    expect.soft(description).toBeInTheDocument();
    });
});
