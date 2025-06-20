import AppointmentForm from "@/app/ui/containers/services/appointment/appointmentForm";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

describe("<AppointmentForm />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render AppointmentForm`, () => {
    render(<AppointmentForm />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
