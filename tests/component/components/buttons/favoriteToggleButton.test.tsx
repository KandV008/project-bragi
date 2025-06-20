import FavoriteToggleButton from "@/app/ui/components/buttons/favoriteToggleButton/favoriteToggleButton";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

vi.mock("@clerk/clerk-react", () => ({
  useUser: () => ({
    user: { id: "123", emailAddresses: [] },
  }),
}));

describe("<FavoriteToggleButton />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render FavoriteToggleButton`, () => {
    render(<FavoriteToggleButton productId={"1"} isActive={false} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
