import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import { SendAudiometryFileForm } from "./sendAudiometryFileForm";

describe("<ContactForm />", () => {
  it(`[${SMOKE_TEST_TAG}] should render ContactForm`, () => {
    render(<SendAudiometryFileForm />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
