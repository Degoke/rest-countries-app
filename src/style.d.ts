import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    color: {
      elements: string
      background: string
      text: string
      input: string
    }
    font: {
      big: string
      medium: string
      small: string
    }
  }
}
