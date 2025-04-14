import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import RadioInput from "./radioInput";

describe("<RadioInput />", () => {1
  it(`[${SMOKE_TEST_TAG}] should render RadioInput`, () => {
    render(<RadioInput label={"example"} name={"example"} list={["example"]} valueOf={function (_: string): string {return _} } />);

    expect(screen.getByLabelText("example")).toBeInTheDocument();
  });
});
