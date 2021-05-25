import styled from 'styled-components'

export default styled.header`
  background-color: ${(props) => props.theme.color.elements};
  padding: 0.5rem 0;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);

  ul {
    width: 90%;
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
  }
`
