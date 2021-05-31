import styled from 'styled-components'

export default styled.header`
  background-color: ${(props) => props.theme.color.elements};
  padding: 0.5rem 0;
  box-shadow: 0px 4px 4px 0px rgba(59, 58, 82, 0.43);
  -webkit-box-shadow: 0px 4px 4px 0px rgba(59, 58, 82, 0.43);
  -moz-box-shadow: 0px 4px 4px 0px rgba(59, 58, 82, 0.43);

  ul {
    width: 85vw;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    border: none;
    background-color: inherit;
    padding: 0.5rem 1rem;
  }

  h1 {
    font-size: ${(props) => props.theme.font.big};

    @media all and (max-width: 600px) {
      font-size: ${(props) => props.theme.font.medium};
    }
  }
`
