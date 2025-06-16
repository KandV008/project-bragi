import { SMOKE_TEST_TAG } from "@/tests/testConstants"
import { render, screen, waitFor } from '@testing-library/react'
import TermsAndConditionsPopUp from "./termsAndConditionsPopUp"

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: vi.fn(),
  }),
}))

describe("<TermsAndConditionsPopUp />", () => {
  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(false),
      })
    ) as unknown as typeof fetch;
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it(`[${SMOKE_TEST_TAG}] should render TermsAndConditionsPopUp when T&C not accepted`, async () => {
    render(<TermsAndConditionsPopUp />)

    await waitFor(() => {
      expect(screen.getAllByRole("button").length).toBeGreaterThan(0)
    })
  })
})
