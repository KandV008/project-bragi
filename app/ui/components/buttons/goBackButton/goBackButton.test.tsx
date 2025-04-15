import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import GoBackButton from "./goBackButton";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
  }),
}));

describe("<GoBackButton />", () => {
  it(`[${SMOKE_TEST_TAG}] should render GoBackButton`, () => {
    render(
      <GoBackButton />
    );

    expect(screen.getAllByRole("button").length).toBeGreaterThan(0);
});
});
