import { render, screen } from "@testing-library/react";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import ProductShoppingList from "@/app/ui/components/products/productShoppingList/productShoppingList";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
  }),
}));

vi.mock("@clerk/clerk-react", async () => {
  const actual = await vi.importActual<typeof import("@clerk/clerk-react")>(
    "@clerk/clerk-react"
  );

  return {
    ...actual,
    useUser: () => ({
      user: { id: "123", emailAddresses: [] },
    }),
  };
});

describe("<ProductShoppingList />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render ProductShoppingList`, () => {
    render(<ProductShoppingList id={"123"} imageURL={"/no-image.png"} name={"Example"} category={"EARPHONE"} brand={"PHONAK"} price={0} earSide={"left"} earphoneShape={""} colorText={""} colorHex={""} quantity={1} discountPrice={null} />)

    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
