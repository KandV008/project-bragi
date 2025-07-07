import SeeMoreButton from "@/app/ui/components/buttons/seeMoreButton/seeMoreButton";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
  }),
}));

describe("<SeeMoreButton />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render SeeMoreButton`, () => {
    render(<SeeMoreButton thing={"Example"} link={"/example"} />);

    expect(screen.getByRole("link")).toBeInTheDocument();
  });
});
