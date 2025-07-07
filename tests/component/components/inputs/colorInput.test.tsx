import ColorInput from "@/app/ui/components/inputs/colorInput/colorInput";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

describe("<ColorInput />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render ColorInput`, () => {
    render(<ColorInput label={"example"} />);

    expect(screen.getAllByRole("button").length).toBeGreaterThan(0);
  });
});
