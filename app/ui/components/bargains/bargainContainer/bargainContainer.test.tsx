import { BargainEntity } from '@/app/model/entities/bargain/Bargain'
import BargainContainer from '@/app/ui/components/bargains/bargainContainer/bargainContainer'
import { render, screen } from '@testing-library/react'

describe("<BargainContainer />", () => {
    it('should render 0 bargains with no Show More Button', () => {
        render(<BargainContainer bargains={[]} showMoreButton={false} />)

        const heading = screen.queryByRole("heading") 
        expect.soft(heading).not.toBeInTheDocument()  
        
        const button = screen.queryByRole("button")
        expect.soft(button).not.toBeInTheDocument()
    })

    it('should render 3 bargains as not preview with no Show More Button', () => {
        const bargains: BargainEntity[] = [
            {
                id: "1", code: "TEST1", title: "Test 1", description: "Texto Ejemplo 1",
                requirements: []
            },
            {
                id: "2", code: "TEST2", title: "Test 2", description: "Texto Ejemplo 2",
                requirements: []
            },
            {
                id: "3", code: "TEST3", title: "Test 3", description: "Texto Ejemplo 3",
                requirements: []
            },
        ]

        render(<BargainContainer bargains={bargains} showMoreButton={false} />)

        bargains.forEach(bargain =>{
            const heading = screen.getByRole("heading", { name: bargain.title})
            expect.soft(heading).toBeInTheDocument()
        })
        
        const link = screen.queryByRole("link")
        expect.soft(link).not.toBeInTheDocument()

        const button = screen.queryByRole("button")
        expect.soft(button).not.toBeInTheDocument()
    })

    it('should render 3 bargains as not preview with Show More Button', () => {
        const bargains: BargainEntity[] = [
            {
                id: "1", code: "TEST1", title: "Test 1", description: "Texto Ejemplo 1",
                requirements: []
            },
            {
                id: "2", code: "TEST2", title: "Test 2", description: "Texto Ejemplo 2",
                requirements: []
            },
            {
                id: "3", code: "TEST3", title: "Test 3", description: "Texto Ejemplo 3",
                requirements: []
            },
        ]

        render(<BargainContainer bargains={bargains} showMoreButton={true} />)

        bargains.forEach(bargain =>{
            const heading = screen.getByRole("heading", { name: bargain.title})
            expect.soft(heading).toBeInTheDocument()
        })
        
        const link = screen.queryByRole("link")
        expect.soft(link).not.toBeInTheDocument()

        const button = screen.queryByRole("button")
        expect.soft(button).toBeInTheDocument()
    })

    it('should render 3 bargains as preview with no Show More Button', () => {
        const bargains: BargainEntity[] = [
            {
                id: "1", code: "TEST1", title: "Test 1", description: "Texto Ejemplo 1",
                requirements: []
            },
            {
                id: "2", code: "TEST2", title: "Test 2", description: "Texto Ejemplo 2",
                requirements: []
            },
            {
                id: "3", code: "TEST3", title: "Test 3", description: "Texto Ejemplo 3",
                requirements: []
            },
        ]

        render(<BargainContainer bargains={bargains} showMoreButton={false} isPreview={true} />)

        bargains.forEach(bargain =>{
            const heading = screen.getByRole("heading", { name: bargain.title})
            expect.soft(heading).toBeInTheDocument()
        })

        const links = screen.getAllByRole("link")
        bargains.forEach((_, index) => {
            expect.soft(links[index]).toBeInTheDocument()
            expect.soft(links[index]).toHaveTextContent(/ver/i)    
        })
        expect.soft(links).toHaveLength(bargains.length)

        const button = screen.queryByRole("button")
        expect.soft(button).not.toBeInTheDocument()
    })

    it('should render 3 bargains as preview with Show More Button', () => {
        const bargains: BargainEntity[] = [
            {
                id: "1", code: "TEST1", title: "Test 1", description: "Texto Ejemplo 1",
                requirements: []
            },
            {
                id: "2", code: "TEST2", title: "Test 2", description: "Texto Ejemplo 2",
                requirements: []
            },
            {
                id: "3", code: "TEST3", title: "Test 3", description: "Texto Ejemplo 3",
                requirements: []
            },
        ]

        render(<BargainContainer bargains={bargains} showMoreButton={true} isPreview={true} />)

        bargains.forEach(bargain =>{
            const heading = screen.getByRole("heading", { name: bargain.title})
            expect.soft(heading).toBeInTheDocument()
        })
        
        const links = screen.getAllByRole("link")
        bargains.forEach((_, index) => {
            expect.soft(links[index]).toBeInTheDocument()
            expect.soft(links[index]).toHaveTextContent(/ver/i)    
        })
        expect.soft(links).toHaveLength(bargains.length)
        
        const button = screen.queryByRole("button")
        expect.soft(button).toBeInTheDocument()
    })
})