import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import MiniTextInput from "./miniTextInput";

describe("<MiniTextInput />", () => {1
  it(`[${SMOKE_TEST_TAG}] should render MiniTextInput`, () => {
    render(<MiniTextInput label={"example"} name={"example"} type={"text"} placeholder={"Example"} icon={faIcons} />);

    expect(screen.getByLabelText("example")).toBeInTheDocument();
  });
});
