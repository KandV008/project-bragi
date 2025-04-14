import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import AmountButton from "./amountButton";
import { faIcons } from "@fortawesome/free-solid-svg-icons";

vi.mock("next/navigation", () => ({
    useRouter: () => ({
      refresh: vi.fn(),
    }),
  }));

describe("<AmountButton />", () => {
  it(`[${SMOKE_TEST_TAG}] should render AmountButton`, () => {
    render(
      <AmountButton
        symbol={faIcons}
        action={function (_: FormData): void {}}
        productId={"Example"}
        colorText={"Example"}
        colorHex={"#ffffff"}
        earSide={"left"}
      />
    );

    expect(screen.getByRole("button")).toBeInTheDocument()
});
});
