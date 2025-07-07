import RadioInputWithQuantity from "@/app/ui/components/inputs/radioInputWithQuantity/radioInputWithQuantity";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

describe("<RadioInputWithQuantity />", () => {1
  it(`[${COMPONENT_TEST_TAG}] should render RadioInputWithQuantity`, () => {
    render(<RadioInputWithQuantity name={"example"} list={["example"]} valueOf={function (_: string): string { return _; } } type={"example"} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
