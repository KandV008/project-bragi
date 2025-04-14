import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import FloatButton from "./floatButton";
import { faIcons } from "@fortawesome/free-solid-svg-icons";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
  }),
}));

describe("<FloatButton />", () => {
  it(`[${SMOKE_TEST_TAG}] should render FloatButton`, () => {
    render(
      <FloatButton icon={faIcons} text={"Example"} subtext={"example"} type={"warning"} position={"center"} />
    );

    expect(screen.getAllByRole("button").length).toBeGreaterThan(0);
});
});
