import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import FileInput from "@/app/ui/components/inputs/fileInput/fileInput";

describe("<FileInput />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render FileInput`, () => {
    render(<FileInput name={"example"} label={"example"} icon={faIcons} />);

    expect(screen.getByLabelText("example")).toBeInTheDocument();
  });
});
