import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import SmallButtonWithIcon from "./smallButtonWithIcon";
import { faIcons } from "@fortawesome/free-solid-svg-icons";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
  }),
}));

describe("<SmallButtonWithIcon />", () => {
  it(`[${SMOKE_TEST_TAG}] should render SmallButtonWithIcon`, () => {
    render(<SmallButtonWithIcon icon={faIcons} text={"Example"} subtext={"Example"} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
