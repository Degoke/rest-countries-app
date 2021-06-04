import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import { provideTheme } from '../../../setupTests'
import PreviewBox from '.'

const country = {
  name: '',
  topLevelDomain: [''],
  capital: '',
  region: '',
  subregion: '',
  population: '',
  nativeName: '',
  flag: '',
  borders: [''],
  cioc: '',
  currencies: [
    {
      code: '',
      name: '',
      symbol: '',
    },
  ],
  languages: [
    {
      name: '',
    },
  ],
}

describe('preview box tests', () => {
  beforeEach(() => {
    render(provideTheme(<PreviewBox country={country} />, 'light'))
  })

  afterEach(cleanup)

  test('flag should be present', () => {
    expect(screen.getByAltText(/flag/i)).toBeInTheDocument()
  })

  test('details should be present', () => {
    expect(screen.queryByText(/population/i)).toBeInTheDocument()
    expect(screen.queryByText(/region/i)).toBeInTheDocument()
    expect(screen.queryByText(/capital/i)).toBeInTheDocument()
  })
})
