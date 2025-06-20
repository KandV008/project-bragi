import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import TextInput from "@/app/ui/components/inputs/textInput/textInput";

describe("<TextInput />", () => {1
  it(`[${COMPONENT_TEST_TAG}] should render TextInput`, () => {
    render(<TextInput name={"example"} placeholder={"example"} label={"example"} icon={faIcons} type={"text"} />);

    expect(screen.getByLabelText("example")).toBeInTheDocument();
  });
});
