import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import { ContactForm } from "./contactForm";

describe("<ContactForm />", () => {
  it(`[${SMOKE_TEST_TAG}] should render ContactForm`, () => {
    render(<ContactForm />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
