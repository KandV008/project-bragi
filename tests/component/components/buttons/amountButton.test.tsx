import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import AmountButton from "@/app/ui/components/buttons/amountButton/amountButton";

vi.mock("next/navigation", () => ({
    useRouter: () => ({
      refresh: vi.fn(),
    }),
  }));

describe("<AmountButton />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render AmountButton`, () => {
    render(
      <AmountButton
        symbol={faIcons}
        action={function (_: FormData): void { } }
        productId={"Example"}
        colorText={"Example"}
        colorHex={"#ffffff"}
        earSide={"left"} updateQuantity={function (): void {
          throw new Error("Function not implemented.");
        } }      />
    );

    expect(screen.getByRole("button")).toBeInTheDocument()
});
});
