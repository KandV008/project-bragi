import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import ColorInput from "./colorInput";

describe("<ColorInput />", () => {
  it(`[${SMOKE_TEST_TAG}] should render ColorInput`, () => {
    render(<ColorInput label={"example"} />);

    expect(screen.getAllByRole("button").length).toBeGreaterThan(0);
  });
});
