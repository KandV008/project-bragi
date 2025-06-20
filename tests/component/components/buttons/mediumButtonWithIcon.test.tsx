import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import MediumButtonWithIcon from "@/app/ui/components/buttons/mediumButtonWithIcon/mediumButtonWithIcon";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
  }),
}));

describe("<MediumButtonWithIcon />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render MediumButtonWithIcon`, () => {
    render(<MediumButtonWithIcon text={"Example"} icon={faIcons} subtext={"Example"} type={"warning"} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
