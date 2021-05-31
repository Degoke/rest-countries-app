import styled from 'styled-components'

export default styled.a`
  padding: 0.2rem 1rem;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  background-color: ${(props) => props.theme.color.elements};
  font-size: ${(props) => props.theme.font.medium};
  border-radius: ${(props) => props.theme.borderRadius};

  :hover {
    opacity: 0.6;
  }
`
