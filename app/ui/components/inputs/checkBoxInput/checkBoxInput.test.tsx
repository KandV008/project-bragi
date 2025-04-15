import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import CheckBoxInput from "./checkBoxInput";

describe("<CheckBoxInput />", () => {
  it(`[${SMOKE_TEST_TAG}] should render CheckBoxInput`, () => {
    render(<CheckBoxInput name={"example"} label={"example"} list={["example"]} />);

    expect(screen.getByLabelText("example")).toBeInTheDocument();
  });
});
