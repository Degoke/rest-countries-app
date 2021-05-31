import styled from 'styled-components'

export default styled.div`
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.color.elements};
  box-shadow: 0px 4px 4px 0px rgba(59, 58, 82, 0.43);
  -webkit-box-shadow: 0px 4px 4px 0px rgba(59, 58, 82, 0.43);
  -moz-box-shadow: 0px 4px 4px 0px rgba(59, 58, 82, 0.43);
  height: 40vh;

  .flag {
    height: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .details {
    padding: 1rem;
  }

  p {
    font-size: ${(props) => props.theme.font.medium};
  }

  h2 {
    font-size: ${(props) => props.theme.font.big};
    margin-bottom: 0.5rem;

    @media all and (max-width: 600px) {
      font-size: ${(props) => props.theme.font.medium};
    }
  }
`
