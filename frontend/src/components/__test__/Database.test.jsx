import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import Database from '../Database'
import AuthContextProvider from '../../contexts/AuthContext'
import ItemsProvider from '../../contexts/ItemsContext'

describe('Database', () => {
    it('renders Search Bar', () => {
        render(
            <AuthContextProvider>
                    <ItemsProvider>
                        <Database />
                    </ItemsProvider>
            </AuthContextProvider>
        )
        expect(screen.getByRole("textbox")).toBeInTheDocument()
    })

})