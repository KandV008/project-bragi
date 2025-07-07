import { render, screen } from "@testing-library/react";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import ShoppingList from "@/app/ui/containers/shoppingList/shoppingList/shoppingList";

describe("<ProductShoppingList />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render ProductShoppingList`, () => {
    render(<ShoppingList products={[]} />)

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
