import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import FileInput from "./fileInput";
import { faIcons } from "@fortawesome/free-solid-svg-icons";

describe("<FileInput />", () => {
  it(`[${SMOKE_TEST_TAG}] should render FileInput`, () => {
    render(<FileInput name={"example"} label={"example"} icon={faIcons} />);

    expect(screen.getByLabelText("example")).toBeInTheDocument();
  });
});
