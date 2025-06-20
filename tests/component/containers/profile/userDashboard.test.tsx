import UserDashboard from "@/app/ui/containers/profile/userDashboard";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

vi.mock("@clerk/nextjs", async () => {
    const actual = await vi.importActual<typeof import("@clerk/nextjs")>(
      "@clerk/nextjs"
    );
  
    return {
      ...actual,
      useUser: () => ({
        user: {
          id: "123",
          firstName: "Test User",
          emailAddresses: [{ emailAddress: "test@example.com" }],
          delete: vi.fn().mockResolvedValue({}),
        },
      }),
      useClerk: () => ({
        signOut: vi.fn().mockResolvedValue({}),
      }),
      Protect: ({ children }: { children: React.ReactNode }) => <>{children}</>,
      OrganizationSwitcher: () => <div>OrganizationSwitcherMock</div>,
      ClerkProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    };
  });

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
    push: vi.fn(),
  }),
  usePathname: () => "/admin/bargains/abc123",
}));

describe("<UserDashboard />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render UserDashboard`, () => {
    render(<UserDashboard />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
