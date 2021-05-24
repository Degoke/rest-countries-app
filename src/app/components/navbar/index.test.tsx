import React from 'react'
import { render, screen } from '@testing-library/react'
import NavBar from '.'

describe('navbar tests', () => {
  beforeEach(() => {
    render(<NavBar />)
  })

  test('it should have title text', () => {
    expect(screen.getByText(/navbar/i)).toBeInTheDocument()
  })
})
