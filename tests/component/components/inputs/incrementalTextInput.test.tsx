import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import IncrementalTextInput from "@/app/ui/components/inputs/incrementalTextInput/incrementalTextInput";

describe("<IncrementalTextInput />", () => {1
  it(`[${COMPONENT_TEST_TAG}] should render IncrementalTextInput`, () => {
    render(<IncrementalTextInput label={"example"} name={"example"} type={"text"} placeholder={"Example"} icon={faIcons} />);

    expect(screen.getAllByRole("button").length).toBeGreaterThan(0);
  });
});
