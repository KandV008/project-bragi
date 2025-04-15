import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import TextAreaInput from "./textAreaInput";
import { faIcons } from "@fortawesome/free-solid-svg-icons";

describe("<TextAreaInput />", () => {1
  it(`[${SMOKE_TEST_TAG}] should render TextAreaInput`, () => {
    render(<TextAreaInput name={"example"} placeholder={"example"} label={"example"} icon={faIcons} />);

    expect(screen.getByLabelText("example")).toBeInTheDocument();
  });
});
