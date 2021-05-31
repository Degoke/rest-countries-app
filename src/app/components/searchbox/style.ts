import styled from 'styled-components'

export default styled.form`
  input {
    padding: 0.5rem;
    box-shadow: 0px 4px 4px 0px rgba(59, 58, 82, 0.43);
    -webkit-box-shadow: 0px 4px 4px 0px rgba(59, 58, 82, 0.43);
    -moz-box-shadow: 0px 4px 4px 0px rgba(59, 58, 82, 0.43);
    background-color: ${(props) => props.theme.color.elements};
    font-size: ${(props) => props.theme.font.medium};
    border-radius: ${(props) => props.theme.borderRadius};
    width: 25vw;

    @media all and (max-width: 600px) {
      font-size: ${(props) => props.theme.font.small};
    }
  }

  @media all and (max-width: 600px) {
    input {
      width: 50vw;
    }
  }

  @media all and (max-width: 410px) {
    input {
      width: 85vw;
    }
  }
`
