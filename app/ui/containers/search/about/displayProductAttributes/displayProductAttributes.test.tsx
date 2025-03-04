import { render, screen } from "@testing-library/react";
import { ClerkProvider, useUser } from "@clerk/nextjs";

vi.mock("@clerk/nextjs", () => ({
  // TODO Fix Mock
  ClerkProvider: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
  useUser: () => ({
    isLoaded: true,
    user: { id: "test-user", email: "test@example.com" },
    isSignedIn: true,
  }),
}));

describe("<DisplayProductAttributes />", () => {
  it.skip("should render DisplayProductAttributes as a EARPHONE with name, with brand, with price, with image, with colors, with includes", () => {
    // TODO End test
  });

  it.skip("should render DisplayProductAttributes as a EARPHONE with COFOSIS without Both Side Button", () => {
    // TODO End test
  });

  it.skip("should render DisplayProductAttributes as a ACCESSORY with name, with brand, with price, with image, with includes", () => {
    // TODO End test
  });

  it.skip("should change the border color of the color button to red when you click", () => {
    // TODO End test
  });

  it.skip("should change the price of the earphone when you click a ear side button", () => {
    // TODO End test
  });

  it.skip("should be only one earside button with the color red when you click on one of them", () => {
    // TODO End test
  });

  it.skip("should change the price of the earphone when you click guarantee button", () => {
    // TODO End test
  });

  it.skip("should let you to submit the form when you click on the submit button", () => {
    // TODO End test
  });

  it.skip("should not let you to submit the form if you don't click a color option and a earside button", () => {
    // TODO End test
  });

  it.skip("should not let you to submit the form if you are not a registered user", () => {
    // TODO End test
  });
});
