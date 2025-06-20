import Footer from "@/app/ui/components/common/footer/footer";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
  }),
}));

describe("<Footer />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render Footer`, () => {
    render(
      <Footer />
    );

    expect(screen.getAllByRole("link").length).toBeGreaterThan(0);
});
});
