import TeamMember from "@/app/ui/containers/services/about-us/teamMember";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

describe("<TeamMember />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render TeamMember`, () => {
    render(<TeamMember name={"Pepe"} imageURL={"/no-image.png"} rol={"example"} />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
