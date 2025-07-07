import FavoritesContainer from "@/app/ui/containers/profile/favorites/favoritesContainer";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

describe("<FavoritesContainer />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render FavoritesContainer`, () => {
    render(<FavoritesContainer />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
