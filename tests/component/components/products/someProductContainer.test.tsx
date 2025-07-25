import SomeProductContainer from "@/app/ui/components/products/someProductContainer/someProductContainer";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

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

describe("<SomeProductContainer />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render SomeProductContainer`, () => {
    render(<SomeProductContainer fetchUrl="" title="example"/>);

    expect(screen.getByText("example")).toBeInTheDocument();
  });
});
