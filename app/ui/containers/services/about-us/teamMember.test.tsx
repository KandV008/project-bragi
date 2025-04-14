import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import TeamMember from "./teamMember";

describe("<TeamMember />", () => {
  it(`[${SMOKE_TEST_TAG}] should render TeamMember`, () => {
    render(<TeamMember name={"Pepe"} imageURL={"/no-image.png"} rol={"example"} />);

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
