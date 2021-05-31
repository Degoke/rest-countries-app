import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { provideTheme } from '../../../setupTests'

import SearchBox from '.'

const handleSearch = jest.fn()

describe('searchbox tests', () => {
  beforeEach(() => {
    render(provideTheme(<SearchBox handleSearch={handleSearch} />, 'light'))
  })

  afterEach(cleanup)

  test('searchbox should be present', () => {
    expect(screen.getByRole('searchbox')).toBeInTheDocument()
  })

  test('search function should be called', async () => {
    await userEvent.type(screen.getByRole('searchbox'), 'Europe, {enter}')
    expect(handleSearch).toHaveBeenCalled()
  })
})
