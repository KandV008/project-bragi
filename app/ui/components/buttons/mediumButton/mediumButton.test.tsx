import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import MediumButton from "./mediumButton";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
  }),
}));

describe("<MediumButton />", () => {
  it(`[${SMOKE_TEST_TAG}] should render MediumButton`, () => {
    render(<MediumButton text={"Example"} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
