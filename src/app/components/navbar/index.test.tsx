import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { provideTheme } from '../../../setupTests'

import NavBar from '.'

const toggleTheme = jest.fn()

describe('navbar tests', () => {
  beforeEach(() => {
    render(
      provideTheme(<NavBar toggleTheme={toggleTheme} theme="light" />, 'light')
    )
  })

  afterEach(cleanup)

  test('it should have title text', () => {
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })

  test('initial mode should be light mode', () => {
    expect(
      screen.getByRole('button', { name: /light mode/i })
    ).toBeInTheDocument()
  })

  test('it should change theme on click of button', async () => {
    await userEvent.click(screen.getByRole('button', { name: /light mode/i }))

    expect(toggleTheme).toHaveBeenCalled()
  })
})
