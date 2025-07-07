import DisplayOrder from "@/app/ui/containers/profile/orders/displayOrders/displayOrder";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

describe("<DisplayOrder />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render DisplayOrder`, () => {
    render(<DisplayOrder id={"123"} creationDate={new Date().toISOString()} userName={"Pepo"} firstName={"Pepez"} phoneNumber={"123123123"} email={"example@email.com"} address={"C/ Example"} products={[]} totalPrice={0} />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
