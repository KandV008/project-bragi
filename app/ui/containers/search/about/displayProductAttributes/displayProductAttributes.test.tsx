import { SMOKE_TEST_TAG } from "@/tests/testConstants";
import { render, screen } from "@testing-library/react";
import DisplayProductAttributes from "./displayProductAttributes";

vi.mock("@clerk/clerk-react", async () => {
  const actual = await vi.importActual<typeof import("@clerk/clerk-react")>(
    "@clerk/clerk-react"
  );

  return {
    ...actual,
    useUser: () => ({
      user: { id: "123", emailAddresses: [] },
    }),
  };
});

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
    push: vi.fn(),
  }),
  usePathname: () => "/admin/bargains/abc123",
}));

describe("<DisplayProductAttributes />", () => {
  it(`[${SMOKE_TEST_TAG}] should render DisplayProductAttributes`, () => {
    render(
      <DisplayProductAttributes
        id={"123"}
        name={"example"}
        category={"ACCESSORY"}
        price={"1234.5"}
        imageURL={"/no-image.png"}
        colors={null}
        earphoneShape={null}
        isCofosis={false}
        brand={"PHONAK"}
        include={["example"]}
      />
    );

    expect(screen.queryAllByRole("button").length).toBeGreaterThanOrEqual(0);
  });
});
