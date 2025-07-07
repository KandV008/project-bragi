import { render, screen } from "@testing-library/react";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import DisplayProductDetails from "@/app/ui/containers/search/about/displayProductDetails/displayProductDetails";

describe("<DisplayProductDetails />", () => {
  const exampleDescription: string =
    "Example plus example plus example plus...";

  it(`[${COMPONENT_TEST_TAG}] should render DisplayProductDetails as a ACCESSORY with description`, () => {
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
