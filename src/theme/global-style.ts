import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0
    }

    body {
        font-family: 'Nunito Sans', sans-serif;
        background-color: ${(props) => props.theme.color.background};
        color: ${(props) => props.theme.color.text}
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }

    input {
        color: ${(props) => props.theme.color.input}
    }
`

export default GlobalStyle
