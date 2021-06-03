import styled from 'styled-components'

export default styled.a`
  padding: 0.2rem 1rem;
  box-shadow: 0px 4px 4px 0px rgba(59, 58, 82, 0.43);
  -webkit-box-shadow: 0px 4px 4px 0px rgba(59, 58, 82, 0.43);
  -moz-box-shadow: 0px 4px 4px 0px rgba(59, 58, 82, 0.43);
  background-color: ${(props) => props.theme.color.elements};
  font-size: ${(props) => props.theme.font.medium};
  border-radius: ${(props) => props.theme.borderRadius};

  :hover {
    opacity: 0.6;
  }
`
