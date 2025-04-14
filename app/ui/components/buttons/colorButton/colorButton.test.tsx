import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import ColorButton from "../colorButton/colorButton";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
  }),
}));

describe("<ColorButton />", () => {
  it(`[${SMOKE_TEST_TAG}] should render ColorButton`, () => {
    render(
      <ColorButton colors={[{ name: "Example", hex: "#ffffff"}]} action={function (_: number): void {} }
      />
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
