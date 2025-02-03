import Bargain from '@/app/ui/components/bargains/bargain'
import { render, screen } from '@testing-library/react'

describe("<Bargain />", () => {
    it("should render Bargain with the title, description and code as not preview", () => {
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

    it("should render Bargain with the title, description and code as preview", () => {
        const title = "Test 1"
        const description = "Texto de ejemplo 1"
        const code = "TEST1"
        
        render(<Bargain id={''} title={title} description={description} code={code} isPreview={true} />)

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
        expect.soft(link).toBeInTheDocument()
        expect.soft(link).toHaveTextContent(/ver/i)
    })
})