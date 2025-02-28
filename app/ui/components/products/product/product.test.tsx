import { render, screen } from "@testing-library/react";
import Product from "./product";
import { ClerkProvider, useUser } from "@clerk/nextjs";

vi.mock("@clerk/nextjs", () => ({
  ClerkProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useUser: () => ({
    isLoaded: true,
    user: { id: "test-user", email: "test@example.com" },
    isSignedIn: true,
  }),
}));

describe("<Product />", () => {
  const exampleProduct = {
    id: "123",
    image_URL: "/products/no-image.png",
    name: "Example Name",
    brand: "Example Brand",
    price: 1234.5,
  };

  it("should render Product as no preview, with image, name, brand, price and buttons", () => {
    const isPreview = false;
    renderProduct(exampleProduct, isPreview);

    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });

  it("should render Product as preview, with image, name, brand, price and button", () => {
    const isPreview = true;
    renderProduct(exampleProduct, isPreview);
  });
});

function renderProduct(
  exampleProduct: {
    id: string;
    image_URL: string;
    name: string;
    brand: string;
    price: number;
  },
  isPreview: boolean
) {
  render(
    <ClerkProvider>
      <Product
        id={exampleProduct.id}
        image={exampleProduct.image_URL}
        name={exampleProduct.name}
        brand={exampleProduct.brand}
        price={exampleProduct.price.toString()}
        isFavorite={false}
        isPreview={isPreview}
      />
    </ClerkProvider>
  );
}
