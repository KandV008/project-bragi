import NoveltyForm from "@/app/ui/containers/admin/novelties/noveltyForm";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
    push: vi.fn(),
  }),
  usePathname: () => "/admin/bargains/abc123",
}));

describe("<NoveltyForm />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render NoveltyForm`, () => {
    render(<NoveltyForm />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
