import React from 'react'
import { render, screen } from '@testing-library/react'
import { provideTheme } from '../../../setupTests'

import MyButton from '.'

describe('button tests', () => {
  test('button should render', () => {
    render(provideTheme(<MyButton link="/">Test</MyButton>))
    expect(screen.getByRole('link')).toBeInTheDocument()
  })
})
