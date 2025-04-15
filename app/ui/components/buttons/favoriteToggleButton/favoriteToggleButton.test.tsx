import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import FavoriteToggleButton from "./favoriteToggleButton";

vi.mock("@clerk/clerk-react", () => ({
  useUser: () => ({
    user: { id: "123", emailAddresses: [] },
  }),
}));

describe("<FavoriteToggleButton />", () => {
  it(`[${SMOKE_TEST_TAG}] should render FavoriteToggleButton`, () => {
    render(<FavoriteToggleButton productId={"1"} isActive={false} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
