import styled from 'styled-components'

export default styled.div`
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.elements};
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);

  .flag {
    flex: 0.5;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .details {
    flex: 0.5;
    padding: 1rem;
  }

  p {
    font-size: ${(props) => props.theme.font.medium};
  }

  h2 {
    font-size: ${(props) => props.theme.font.big};
  }
`
