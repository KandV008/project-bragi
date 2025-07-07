import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import SmallButtonWithIcon from "@/app/ui/components/buttons/smallButtonWithIcon/smallButtonWithIcon";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
  }),
}));

describe("<SmallButtonWithIcon />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render SmallButtonWithIcon`, () => {
    render(<SmallButtonWithIcon icon={faIcons} text={"Example"} subtext={"Example"} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
