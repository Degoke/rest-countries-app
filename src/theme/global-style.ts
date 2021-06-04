import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        transition: color 0.1s ease;
        transition: background-color 0.4s ease;
    }

    body {
        font-family: 'Nunito Sans', sans-serif;
        background-color: ${(props) => props.theme.color.background};
        color: ${(props) => props.theme.color.text};
        font-size: ${(props) => props.theme.font.big};
        overflow-x: hidden;

        @media all and (max-width: 600px){
          font-size: ${(props) => props.theme.font.medium};
        }
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }

    li {
      list-style-type: none;
    }

    button {
      font: inherit;

      :hover {
        cursor: pointer;
        opacity: 0.6;
      }
    }

    input, select, button {
        color: ${(props) => props.theme.color.input};
        border: none;
        outline: none;
    }
`

export default GlobalStyle
