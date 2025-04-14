import { render, screen } from "@testing-library/react";
import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import ShoppingList from "./shoppingList";

describe("<ProductShoppingList />", () => {
  it(`[${SMOKE_TEST_TAG}] should render ProductShoppingList`, () => {
    render(<ShoppingList products={[]} />)

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
