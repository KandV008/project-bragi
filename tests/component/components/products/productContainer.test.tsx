import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import ProductContainer from "../../../../app/ui/components/products/productContainer/productContainer";

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

describe("<ProductContainer />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render ProductContainer`, () => {
    render(<ProductContainer products={[]} showMoreButton={true} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
