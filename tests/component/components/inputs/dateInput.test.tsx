import DateInput from "@/app/ui/components/inputs/dateInput/dateInput";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

describe("<TextInput />", () => {1
  it(`[${COMPONENT_TEST_TAG}] should render TextInput`, () => {
    render(<DateInput name={"example"} label={"example"}/>);

    expect(screen.getByLabelText("example")).toBeInTheDocument();
  });
});
