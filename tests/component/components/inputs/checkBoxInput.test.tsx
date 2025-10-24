import CheckBoxInput from "@/app/ui/components/inputs/checkBoxInput/checkBoxInput";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

describe("<CheckBoxInput />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render CheckBoxInput`, () => {
    render(<CheckBoxInput name={"example"} label={"example"} optionLabels={["example"]} optionValues={["example"]}  />);

    expect(screen.getByLabelText("example")).toBeInTheDocument();
  });
});
