import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import SearchBar from "./searchBar";

describe("<SearchBar />", () => {1
  it(`[${SMOKE_TEST_TAG}] should render SearchBar`, () => {
    render(<SearchBar isCompress={false}  />);

    expect(screen.getByRole("link")).toBeInTheDocument();
  });
});
