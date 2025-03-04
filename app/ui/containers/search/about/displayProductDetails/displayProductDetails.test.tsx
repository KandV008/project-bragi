import { EarphoneAttributes } from "@/app/model/entities/product/EarphoneAttributes";
import {
  EarphoneShape,
  EarphoneShapeDetails,
} from "@/app/model/entities/product/enums/earphoneAttributes/EarphoneShape";
import { Uses } from "@/app/model/entities/product/enums/earphoneAttributes/Uses";
import { render, screen } from "@testing-library/react";
import DisplayProductDetails from "./displayProductDetails";

describe("<DisplayProductDetails />", () => {
  const exampleDescription: string =
    "Example plus example plus example plus...";
  const exampleEarphoneAttributes: EarphoneAttributes = {
    colors: [],
    adaptationRange: "MILD-SEVERE",
    waterDustResistance: false,
    earphoneShape: EarphoneShape.BTE,
    degreeOfLoss: "MILD-SEVERE",
    uses: [Uses.CHAT, Uses.IN_GROUP, Uses.LEISURE, Uses.TELEPHONE, Uses.TV],
  };

  it.skip("should render DisplayProductDetails as a EARPHONE with description, with earphone ear location, with level of discretion, with adaptation range, with degree of loss, with dust and water resistance, with uses", () => {
    render(
      <DisplayProductDetails
        description={exampleDescription}
        earphoneAttributes={exampleEarphoneAttributes}
      />
    );

    checkDescription(exampleDescription);

    const earphoneLocation = screen.getByText(
      EarphoneShapeDetails[exampleEarphoneAttributes.earphoneShape].location
    );
    expect.soft(earphoneLocation).toBeInTheDocument();

    const levelOfDiscretion = screen.getByText(
      EarphoneShapeDetails[exampleEarphoneAttributes.earphoneShape].level_of_discretion
    );
    expect.soft(levelOfDiscretion).toBeInTheDocument();

    const adaptationRange = screen.getByText(
      exampleEarphoneAttributes.adaptationRange
    );
    expect.soft(adaptationRange).toBeInTheDocument();

    const degreeOfLoss = screen.getByText(
      exampleEarphoneAttributes.degreeOfLoss
    );
    expect.soft(degreeOfLoss).toBeInTheDocument();
    // TODO End test
  });

  it.skip("should render DisplayProductDetails as a EARPHONE with description, with Cofosis, with dust and water resistance, with uses", () => {
    exampleEarphoneAttributes.adaptationRange = "COFOSIS";
    exampleEarphoneAttributes.earphoneShape = EarphoneShape.COFOSIS;
    exampleEarphoneAttributes.degreeOfLoss = "COFOSIS";

    render(
      <DisplayProductDetails
        description={exampleDescription}
        earphoneAttributes={exampleEarphoneAttributes}
      />
    );

    checkDescription(exampleDescription);
    // TODO End test
  });

  it("should render DisplayProductDetails as a ACCESSORY with description", () => {
    render(
      <DisplayProductDetails
        description={exampleDescription}
        earphoneAttributes={null}
      />
    );

    checkDescription(exampleDescription);
  });
});

function checkDescription(exampleDescription: string) {
  const description = screen.getByText(exampleDescription);
  expect.soft(description).toBeInTheDocument();
}
