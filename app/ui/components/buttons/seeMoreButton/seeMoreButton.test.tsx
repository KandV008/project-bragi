import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import SeeMoreButton from "./seeMoreButton";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
  }),
}));

describe("<SeeMoreButton />", () => {
  it(`[${SMOKE_TEST_TAG}] should render SeeMoreButton`, () => {
    render(<SeeMoreButton thing={"Example"} link={"/example"} />);

    expect(screen.getByRole("link")).toBeInTheDocument();
  });
});
