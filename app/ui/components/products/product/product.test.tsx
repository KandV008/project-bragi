import { render, screen } from "@testing-library/react";
import Product from "./product";
import { SMOKE_TEST_TAG } from "@/tests/testConstants";

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

describe("<Product />", () => {
  const exampleProduct = {
    id: "123",
    image_URL: "/products/no-image.png",
    name: "Example Name",
    brand: "Example Brand",
    price: 1234.5,
  };

  it(`[${SMOKE_TEST_TAG}] should render Product as no preview, with image, name, brand, price and buttons`, () => {
    render(<Product id={exampleProduct.id} image={exampleProduct.image_URL} name={exampleProduct.name} brand={exampleProduct.brand} price={exampleProduct.price.toString()} isFavorite={false} />);
    
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
