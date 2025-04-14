import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import Spinner from "./spinner";

describe("<Spinner />", () => {
  it(`[${SMOKE_TEST_TAG}] should render Spinner`, () => {
    render(<Spinner />);

    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
