import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import Spinner from "../../../../app/ui/components/common/spinner/spinner";

describe("<Spinner />", () => {
  it(`[${COMPONENT_TEST_TAG}] should render Spinner`, () => {
    render(<Spinner />);

    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
