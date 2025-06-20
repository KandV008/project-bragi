import SmallButton from "@/app/ui/components/buttons/smallButton/smallButton";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
  }),
}));

describe("<SmallButton />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render SmallButton`, () => {
    render(<SmallButton text={"Example"} href={"/example"} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
