import { SendAudiometryFileForm } from "@/app/ui/containers/services/send-audiometry-file/sendAudiometryFileForm";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

describe("<ContactForm />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render ContactForm`, () => {
    render(<SendAudiometryFileForm />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
