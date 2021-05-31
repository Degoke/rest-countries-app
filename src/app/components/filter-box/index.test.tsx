import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { provideTheme } from '../../../setupTests'
import FilterBox from '.'

const handleChange = jest.fn()

describe('filter box test', () => {
  beforeEach(() => {
    render(provideTheme(<FilterBox handleChange={handleChange} />))
  })

  afterEach(cleanup)
  test('filter box should render', () => {
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  test('handleChange should be called', async () => {
    await userEvent.selectOptions(screen.getByRole('combobox'), ['A'])

    expect(handleChange).toHaveBeenCalled()
  })
})
