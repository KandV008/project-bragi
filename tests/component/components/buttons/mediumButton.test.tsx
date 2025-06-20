import MediumButton from "@/app/ui/components/buttons/mediumButton/mediumButton";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
  }),
}));

describe("<MediumButton />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render MediumButton`, () => {
    render(<MediumButton text={"Example"} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
