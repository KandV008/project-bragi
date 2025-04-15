import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import RadioInputWithQuantity from "./radioInputWithQuantity";

describe("<RadioInputWithQuantity />", () => {1
  it(`[${SMOKE_TEST_TAG}] should render RadioInputWithQuantity`, () => {
    render(<RadioInputWithQuantity name={"example"} list={["example"]} valueOf={function (_: string): string { return _; } } type={"example"} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
