import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import AppointmentForm from "./appointmentForm";

describe("<AppointmentForm />", () => {
  it(`[${SMOKE_TEST_TAG}] should render AppointmentForm`, () => {
    render(<AppointmentForm />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
