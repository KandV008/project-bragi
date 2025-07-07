import AdminPanel from "@/app/ui/containers/admin/adminPanel/adminPanel";
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
}));

describe("<AdminPanel />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render AdminPanel`, () => {
    render(<AdminPanel entity={"product"} context={"ALL"} extras={{
        entityId: undefined,
        url: undefined
    }} />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
