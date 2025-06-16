import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import DateInput from "./dateInput";

describe("<TextInput />", () => {1
  it(`[${SMOKE_TEST_TAG}] should render TextInput`, () => {
    render(<DateInput name={"example"} label={"example"}/>);

    expect(screen.getByLabelText("example")).toBeInTheDocument();
  });
});
