import Header from "@/app/ui/components/common/header/header";
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

describe("<Header />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render Header`, () => {
    render(<Header />);

    expect(screen.getAllByRole("button").length).toBeGreaterThan(0);
  });
});
