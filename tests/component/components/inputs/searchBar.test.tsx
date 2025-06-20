import SearchBar from "@/app/ui/components/inputs/searchBar/searchBar";
import { COMPONENT_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";

describe("<SearchBar />", () => {1
  it(`[${COMPONENT_TEST_TAG}] should render SearchBar`, () => {
    render(<SearchBar isCompress={false}  />);

    expect(screen.getByRole("link")).toBeInTheDocument();
  });
});
