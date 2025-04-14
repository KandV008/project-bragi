import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import SmallButton from "./smallButton";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
  }),
}));

describe("<SmallButton />", () => {
  it(`[${SMOKE_TEST_TAG}] should render SmallButton`, () => {
    render(<SmallButton text={"Example"} href={"/example"} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
