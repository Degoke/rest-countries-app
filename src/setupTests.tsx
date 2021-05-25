/* eslint-disable import/prefer-default-export */
import '@testing-library/jest-dom'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeType } from './context/theme-context'
import GlobalStyle from './theme/global-style'
import { darkTheme, lightTheme } from './theme/theme'

export const provideTheme = (
  ui: React.ReactElement,
  theme: ThemeType
): React.ReactElement => {
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      {ui}
    </ThemeProvider>
  )
}
