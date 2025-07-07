import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import GoBackButton from "../../../../app/ui/components/buttons/goBackButton/goBackButton";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
  }),
}));

describe("<GoBackButton />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render GoBackButton`, () => {
    render(
      <GoBackButton />
    );

    expect(screen.getAllByRole("button").length).toBeGreaterThan(0);
});
});
