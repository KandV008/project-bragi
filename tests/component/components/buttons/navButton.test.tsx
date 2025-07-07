import NavButton from "@/app/ui/components/buttons/navButton/navButton";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
  }),
}));

describe("<NavButton />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render NavButton`, () => {
    render(<NavButton text={"Example"} href={"/example"} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
