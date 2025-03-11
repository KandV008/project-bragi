import { BargainEntity } from "@/app/model/entities/Bargain";
import BargainInput from "@/app/ui/components/bargains/bargainInput";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

describe("<BargainInput />", () => {
  interface WrapperProps {
    currentBargain: BargainEntity | null
  }
  const Wrapper = ({currentBargain}: WrapperProps) => {
    const [bargain, setBargain] = useState<BargainEntity | null>(currentBargain);

    return (
      <BargainInput
        bargain={bargain}
        setBargain={(bargain) => setBargain(bargain)}
      />
    );
  };

  it("should not submit the value of the input due to be empty", async () => {
    let bargain: BargainEntity | null = null;

    render(
      <BargainInput
        bargain={bargain}
        setBargain={function (bargain: BargainEntity | null): void {}}
      />
    );

    const user = userEvent.setup();

    const button = screen.getByRole("button");
    await user.click(button);

    const quitButton = screen.queryByRole("button");
    expect(quitButton).not.toHaveTextContent(/quitar/i);
  });

  // TODO Know how to use .env in vitest
  it.skip("should submit the value of the input due to be a valid code", async () => {
    render(<Wrapper currentBargain={null} />);

    const user = userEvent.setup();

    const textInput = screen.getByRole("textbox");
    await user.type(textInput, "4POR2");
    expect(textInput).toHaveValue("4POR2");

    const applyButton = screen.getByRole("button", { name: /aplicar/i });
    await user.click(applyButton);

    const quitButton = screen.queryByRole("button", { name: /quitar/i });
    expect(quitButton).toBeInTheDocument();
  })

  it('should not submit the value of the input due to be an invalid code', async () => {
    render(<Wrapper currentBargain={null} />);

    const user = userEvent.setup();

    const textInput = screen.getByRole("textbox");
    await user.type(textInput, "INVALIDCODE");
    expect(textInput).toHaveValue("INVALIDCODE");

    const applyButton = screen.getByRole("button", { name: /aplicar/i });
    await user.click(applyButton);

    const quitButton = screen.queryByRole("button", { name: /quitar/i });
    expect(quitButton).not.toBeInTheDocument();
  })

  it("should render the bargain applied and quit the option", async () => {
    const currentBargain = {
      id: "4",
      code: "TEST2",
      title: "Test 4",
      description: "Texto Ejemplo 4",
    };

    render(<Wrapper currentBargain={currentBargain} />);

    const user = userEvent.setup();

    const textInput = screen.getByText(currentBargain.code);
    expect(textInput).toBeInTheDocument();

    const applyButton = screen.getByRole("button", { name: /quitar/i });
    await user.click(applyButton);

    const quitButton = screen.getByRole("button", { name: /aplicar/i });
    expect(quitButton).toBeInTheDocument();
  });
});
