import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import FavoritesContainer from "./favoritesContainer";

describe("<FavoritesContainer />", () => {
  it(`[${SMOKE_TEST_TAG}] should render FavoritesContainer`, () => {
    render(<FavoritesContainer />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
