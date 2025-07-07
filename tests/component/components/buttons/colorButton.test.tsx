import ColorButton from "@/app/ui/components/buttons/colorButton/colorButton";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
  }),
}));

describe("<ColorButton />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render ColorButton`, () => {
    render(
      <ColorButton colors={[{ name: "Example", hex: "#ffffff"}]} action={function (_: number): void {} }
      />
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
