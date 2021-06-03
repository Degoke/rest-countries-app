import { DefaultTheme } from 'styled-components'

export const darkTheme: DefaultTheme = {
  borderRadius: '5px',
  color: {
    elements: 'hsl(209, 23%, 22%)',
    background: 'hsl(207, 26%, 17%)',
    text: 'hsl(0, 0%, 100%)',
    input: 'hsl(0, 0%, 100%)',
  },
  font: {
    big: 'clamp(14px, 1rem + 2vw, 16px)',
    medium: 'clamp(12px, 1rem + 2vw, 14px)',
    small: 'clamp(10px, 1rem + 2vw, 12px)',
  },
}

export const lightTheme: DefaultTheme = {
  borderRadius: '5px',
  color: {
    elements: 'hsl(0, 0%, 100%)',
    background: 'hsl(0, 0%, 98%)',
    text: 'hsl(200, 15%, 8%)',
    input: 'hsl(0, 0%, 52%)',
  },
  font: {
    big: 'clamp(14px, 1rem + 2vw, 16px)',
    medium: 'clamp(12px, 1rem + 2vw, 14px)',
    small: 'clamp(10px, 1rem + 2vw, 12px)',
  },
}
