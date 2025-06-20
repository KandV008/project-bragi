import EmptyMessage from "@/app/ui/components/messages/emptyMessage/emptyMessage"
import { COMPONENT_TEST_TAG } from "@/tests/testConstants"
import { render, screen } from '@testing-library/react'

describe("<EmptyMessage />", () => {
    it(`[${COMPONENT_TEST_TAG}] should render EmptyMessage`, () => {
        render(<EmptyMessage />)

        expect(screen.getByRole("img")).toBeInTheDocument()
    })
})