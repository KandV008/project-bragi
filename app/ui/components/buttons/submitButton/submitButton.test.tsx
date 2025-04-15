import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import SubmitButton from "./submitButton";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
  }),
}));

describe("<SubmitButton />", () => {
  it(`[${SMOKE_TEST_TAG}] should render SubmitButton`, () => {
    render(<SubmitButton text={"Example"} icon={"function"} isDisable={false} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
