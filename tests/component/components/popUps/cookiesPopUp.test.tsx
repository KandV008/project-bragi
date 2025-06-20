import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen, waitFor } from "@testing-library/react";
import CookiesPopUp from "../../../../app/ui/components/popUps/cookiesPopUp/cookiesPopUp";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
  }),
}));

describe("<ConfirmationPopUp />", () => {
  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(false),
      })
    ) as unknown as typeof fetch;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it(`[${COMPONENT_TEST_TAG}] should render ConfirmationPopUp`, async () => {
    render(<CookiesPopUp />);

    await waitFor(() => {
      expect(screen.getAllByRole("button").length).toBeGreaterThan(0)
    })
  });
});
