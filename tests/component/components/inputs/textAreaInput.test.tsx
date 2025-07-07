import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import TextAreaInput from "@/app/ui/components/inputs/textAreaInput/textAreaInput";

describe("<TextAreaInput />", () => {1
  it(`[${COMPONENT_TEST_TAG}] should render TextAreaInput`, () => {
    render(<TextAreaInput name={"example"} placeholder={"example"} label={"example"} icon={faIcons} />);

    expect(screen.getByLabelText("example")).toBeInTheDocument();
  });
});
