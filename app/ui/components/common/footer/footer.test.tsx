import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import Footer from "./footer";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
  }),
}));

describe("<Footer />", () => {
  it(`[${SMOKE_TEST_TAG}] should render Footer`, () => {
    render(
      <Footer />
    );

    expect(screen.getAllByRole("link").length).toBeGreaterThan(0);
});
});
