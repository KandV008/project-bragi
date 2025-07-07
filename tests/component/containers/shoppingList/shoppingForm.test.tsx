import ShoppingForm from "@/app/ui/containers/shoppingList/shoppingForm/shoppingForm";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

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

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
    push: vi.fn(),
  }),
  usePathname: () => "/admin/bargains/abc123",
  useSearchParams: () => ({
    get: vi.fn().mockReturnValue(null),
  }),
}));

describe("<ShoppingForm />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render ShoppingForm`, () => {
    render(<ShoppingForm products={[]} />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
