import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import FloatButton from "@/app/ui/components/buttons/floatButton/floatButton";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
  }),
}));

describe("<FloatButton />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render FloatButton`, () => {
    render(
      <FloatButton icon={faIcons} text={"Example"} subtext={"example"} type={"warning"} position={"center"} />
    );

    expect(screen.getAllByRole("button").length).toBeGreaterThan(0);
});
});
