import RadioInput from "@/app/ui/components/inputs/radioInput/radioInput";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

describe("<RadioInput />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render RadioInput`, () => {
    render(<RadioInput label={"example"} name={"example"} list={["example"]} valueOf={function (_: string): string {return _} } />);

    expect(screen.getByLabelText("example")).toBeInTheDocument();
  });
});
