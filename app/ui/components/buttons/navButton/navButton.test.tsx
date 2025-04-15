import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import NavButton from "./navButton";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
  }),
}));

describe("<NavButton />", () => {
  it(`[${SMOKE_TEST_TAG}] should render NavButton`, () => {
    render(<NavButton text={"Example"} href={"/example"} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
