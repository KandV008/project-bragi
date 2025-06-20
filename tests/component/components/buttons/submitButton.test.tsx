import SubmitButton from "@/app/ui/components/buttons/submitButton/submitButton";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
  }),
}));

describe("<SubmitButton />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render SubmitButton`, () => {
    render(<SubmitButton text={"Example"} icon={"function"} isDisable={false} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
