import TermsAndConditionsPopUp from "@/app/ui/components/popUps/termsAndConditionsPopUp/termsAndConditionsPopUp"
import { COMPONENT_TEST_TAG } from "@/tests/testConstants"
import { render, screen, waitFor } from '@testing-library/react'

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

  it(`[${COMPONENT_TEST_TAG}] should render TermsAndConditionsPopUp when T&C not accepted`, async () => {
    render(<TermsAndConditionsPopUp />)

    await waitFor(() => {
      expect(screen.getAllByRole("button").length).toBeGreaterThan(0)
    })
  })
})
