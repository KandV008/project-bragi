import ShoppingFormAdvice from "@/app/ui/components/advices/shoppingFormAdvice"
import { COMPONENT_TEST_TAG } from "@/tests/testConstants"
import { render, screen } from '@testing-library/react'

describe("<ShoppingFormAdvice />", () => {
    it(`[${COMPONENT_TEST_TAG}] should render ShoppingFormAdvice`, () => {
        render(<ShoppingFormAdvice products={[{ name: "Audífono X", earphoneShape: "CIC" } as any]} />)

        expect(screen.getByText(/Audífonos no validos/i)).toBeInTheDocument()
        expect(screen.getByText(/Audífono X/)).toBeInTheDocument()
    })
})