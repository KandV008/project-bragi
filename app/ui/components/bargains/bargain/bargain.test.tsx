import Bargain from '@/app/ui/components/bargains/bargain/bargain'
import { SMOKE_TEST_TAG } from '@/tests/testConstants'
import { render, screen } from '@testing-library/react'

describe("<Bargain />", () => {
    it(`[${SMOKE_TEST_TAG}] should render Bargain`, () => {
        const title = "Test 1"
        const description = "Texto de ejemplo 1"
        const code = "TEST1"
        
        render(<Bargain id={''} title={title} description={description} code={code} />)

        const heading = screen.getByRole('heading')
        expect.soft(heading).toBeInTheDocument()
        expect.soft(heading).toHaveTextContent(title)

        const paragraph = screen.getByRole("contentinfo")
        expect.soft(paragraph).toBeInTheDocument()
        expect.soft(paragraph).toHaveTextContent(description)

        const article = screen.getByRole("definition")
        expect.soft(article).toBeInTheDocument()
        expect.soft(article).toHaveTextContent(code)

        const link = screen.queryByRole("link")
        expect.soft(link).not.toBeInTheDocument()
    })
})