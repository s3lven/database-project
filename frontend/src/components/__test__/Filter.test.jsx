import { render, screen } from "@testing-library/react"
import { describe, test, expect } from "vitest"
import Filter from '../Filter'

import { useState } from "react"

const MockFilter = () => {
    const [filter, setFilter] = useState({})
    return (
        <Filter filter={filter} setFilter={setFilter} />
    )
}

describe('Filter', () => {
    test('renders correctly', () => {
        render(<MockFilter/>)
        const paragraphElement = screen.getByRole('paragraph')
        expect(paragraphElement).toBeInTheDocument()
        const locationLabel = screen.getByRole('label', { name: '/location/i'})
        expect(locationLabel).toBeInTheDocument()
    })
})