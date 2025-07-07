import { ContactForm } from "@/app/ui/containers/services/contact/contactForm";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

describe("<ContactForm />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render ContactForm`, () => {
    render(<ContactForm />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
