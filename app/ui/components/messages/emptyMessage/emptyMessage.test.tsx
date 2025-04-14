import { SMOKE_TEST_TAG } from "@/tests/testConstants"
import { render, screen } from '@testing-library/react'
import EmptyMessage from "./emptyMessage"

describe("<EmptyMessage />", () => {
    it(`[${SMOKE_TEST_TAG}] should render EmptyMessage`, () => {
        render(<EmptyMessage />)

        expect(screen.getByRole("img")).toBeInTheDocument()
    })
})