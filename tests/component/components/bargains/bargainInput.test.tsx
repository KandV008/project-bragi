import { BargainEntity } from "@/app/model/entities/bargain/Bargain";
import BargainInput from "@/app/ui/components/bargains/bargainInput/bargainInput";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<BargainInput />", () => {

  it(`[${COMPONENT_TEST_TAG}] should not submit the value of the input due to be empty`, async () => {
    let bargain: BargainEntity | null = null;

    render(
      <BargainInput
        bargain={bargain}
        setBargain={function (_: BargainEntity | null): void { } } status={0}      />
    );

    const user = userEvent.setup();

    const button = screen.getByRole("button");
    await user.click(button);

    const quitButton = screen.queryByRole("button");
    expect(quitButton).not.toHaveTextContent(/quitar/i);
  });

});
